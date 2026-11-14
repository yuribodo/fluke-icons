// Builds icons/*.svg, icons/theme.json and preview.html from icons.config.mjs.
// Run: node tools/build.mjs   (no dependencies)
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { icons, folders } from '../icons.config.mjs'
import { glyphs, python } from '../src/glyphs.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const out = join(root, 'icons')

// Orca limits (docs/reference/plugin-themes.md)
const MAX_MAPPINGS = 512
const MAX_SVGS = 512
const MAX_SVG_BYTES = 64 * 1024
const MAX_TOTAL_BYTES = 4 * 1024 * 1024
const MAX_THEME_BYTES = 64 * 1024

const svgFile = (name) => readFileSync(join(root, 'src/logos', name), 'utf8')

// Returns { viewBox: [x, y, w, h], body } for a source, painted with `color` where the source is single-color.
function load(source, color, viewBoxOverride) {
  const [kind, name] = source.includes(':') ? source.split(/:(.*)/) : [source, '']
  if (kind === 'python') return { viewBox: vb(python.viewBox), body: python.body }
  if (kind === 'glyph') {
    if (!glyphs[name]) throw new Error(`unknown glyph "${name}"`)
    return { viewBox: [0, 0, 16, 16], body: glyphs[name].replaceAll('{fg}', color ?? '#fff') }
  }
  const raw = svgFile(kind === 'si' ? `${name}.svg` : name)
  const rootTag = raw.match(/<svg\b[^>]*>/)[0]
  const viewBox = vb(viewBoxOverride ?? rootTag.match(/viewBox="([^"]+)"/)[1])
  if (kind === 'si') {
    const paths = [...raw.matchAll(/ d="([^"]+)"/g)].map((m) => `<path fill="${color}" d="${m[1]}"/>`)
    return { viewBox, body: paths.join('') }
  }
  // Generic SVG: keep its own colors; drop editor-specific attributes so the inner markup stands alone.
  const inner = raw.slice(raw.indexOf(rootTag) + rootTag.length, raw.lastIndexOf('</svg>'))
  const body = inner.replace(/\s(?:serif:id|id|xml:space)="[^"]*"/g, '').replace(/\s+/g, ' ').trim()
  return { viewBox, body }
}

const vb = (s) => s.trim().split(/[\s,]+/).map(Number)
const n = (x) => +x.toFixed(3)

// Places a loaded source into the square (x, y, size) of a 16×16 icon.
function place({ viewBox: [vx, vy, vw, vh], body }, x, y, size) {
  const s = size / Math.max(vw, vh)
  const dx = x + (size - vw * s) / 2, dy = y + (size - vh * s) / 2
  return `<g transform="translate(${n(dx)} ${n(dy)}) scale(${n(s)}) translate(${n(-vx)} ${n(-vy)})">${body}</g>`
}

const wrap = (inner) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">${inner}</svg>\n`

const files = new Map() // file name -> svg
const theme = { schemaVersion: 1, icons: {}, fileNames: {}, fileExtensions: {}, folderNames: {}, folderNamesExpanded: {} }
const seen = new Map() // lowercased key per map -> owner, to refuse duplicates

function map(table, key, file, owner) {
  if (/[\\/]/.test(key)) throw new Error(`${owner}: "${key}" contains a path separator`)
  const k = `${table}:${key.toLowerCase()}`
  if (seen.has(k)) throw new Error(`${owner}: "${key}" already mapped by ${seen.get(k)}`)
  seen.set(k, owner)
  theme[table][key] = `icons/${file}`
}

// Generic slots
for (const id of ['file', 'folder', 'folder-open']) {
  files.set(`${id}.svg`, wrap(glyphs[id]))
  theme.icons[id] = `icons/${id}.svg`
}

// File icons: logos get 1px of air on each side; our 16px glyphs are already padded.
for (const icon of icons) {
  const src = load(icon.source, icon.color, icon.viewBox)
  const isGlyph = icon.source.startsWith('glyph:')
  const file = `${icon.id}.svg`
  files.set(file, wrap(isGlyph ? src.body : place(src, 1, 1, 14)))
  for (const e of icon.ext ?? []) map('fileExtensions', e, file, icon.id)
  for (const name of icon.names ?? []) map('fileNames', name, file, icon.id)
}

// Named folders: gray folder + badge with a white glyph.
for (const f of folders) {
  const badge = `<circle cx="11.6" cy="11.4" r="4" fill="${f.badge}"/>` + place(load(f.glyph, '#fff'), 9.4, 9.2, 4.4)
  for (const [state, base, table] of [['', 'folder', 'folderNames'], ['-open', 'folder-open', 'folderNamesExpanded']]) {
    const file = `folder-${f.id}${state}.svg`
    files.set(file, wrap(glyphs[base] + badge))
    for (const name of f.names) map(table, name, file, `folder ${f.id}`)
  }
}

// Checks against Orca's limits
const mappings = ['fileNames', 'fileExtensions', 'folderNames', 'folderNamesExpanded'].reduce((a, t) => a + Object.keys(theme[t]).length, 0)
const total = [...files.values()].reduce((a, s) => a + Buffer.byteLength(s), 0)
const problems = []
if (mappings > MAX_MAPPINGS) problems.push(`${mappings} mappings (max ${MAX_MAPPINGS})`)
if (files.size > MAX_SVGS) problems.push(`${files.size} SVGs (max ${MAX_SVGS})`)
if (total > MAX_TOTAL_BYTES) problems.push(`${total} bytes of SVG (max ${MAX_TOTAL_BYTES})`)
for (const [f, s] of files) if (Buffer.byteLength(s) > MAX_SVG_BYTES) problems.push(`${f} is ${Buffer.byteLength(s)} bytes (max ${MAX_SVG_BYTES})`)
const themeJson = JSON.stringify(theme, null, 2) + '\n'
if (Buffer.byteLength(themeJson) > MAX_THEME_BYTES) problems.push(`theme.json is too big`)
if (problems.length) {
  console.error('Build failed:\n- ' + problems.join('\n- '))
  process.exit(1)
}

rmSync(out, { recursive: true, force: true })
mkdirSync(out)
for (const [f, s] of files) writeFileSync(join(out, f), s)
writeFileSync(join(out, 'theme.json'), themeJson)

// Preview sheet: every SVG at 16 and 32px on a dark and a light background.
const cells = [...files.keys()].map((f) => `<figure><div class="d"><img src="icons/${f}" width="16"><img src="icons/${f}" width="32"></div><div class="l"><img src="icons/${f}" width="16"><img src="icons/${f}" width="32"></div><figcaption>${f.replace('.svg', '')}</figcaption></figure>`).join('')
writeFileSync(join(root, 'preview.html'), `<!doctype html><meta charset="utf-8"><title>Fluke Icons preview</title><style>body{margin:0;padding:16px;background:#111;font:11px ui-monospace,monospace;color:#999;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}figure{margin:0}figure>div{display:flex;gap:10px;align-items:center;padding:8px}.d{background:#1c1b22}.l{background:#f3f3f5}figcaption{padding:4px 2px}</style>${cells}\n`)

console.log(`Built ${files.size} SVGs, ${mappings} mappings, ${(total / 1024).toFixed(1)} KiB of SVG.`)
