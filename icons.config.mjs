// What Fluke draws and where each icon is used.
// source: "si:<file>" (Simple Icons SVG in src/logos), "svg:<file>" (any SVG in src/logos), "glyph:<id>" (src/glyphs.mjs), "python".
// Orca matches fileNames first, then the longest fileExtensions key (so "controller.ts" beats "ts"), then the generic file icon.

export const icons = [
  // Languages
  { id: 'javascript', source: 'si:javascript', color: '#F7DF1E', ext: ['js', 'mjs', 'cjs'] },
  { id: 'typescript', source: 'si:typescript', color: '#3178C6', ext: ['ts', 'mts', 'cts'] },
  { id: 'react', source: 'si:react', color: '#61DAFB', ext: ['jsx', 'tsx'] },
  { id: 'go', source: 'glyph:gopher', ext: ['go'], names: ['go.mod', 'go.sum', 'go.work'] },
  { id: 'python', source: 'python', ext: ['py', 'pyi', 'pyw'], names: ['requirements.txt', 'pyproject.toml', 'Pipfile'] },
  { id: 'json', source: 'glyph:json', ext: ['json', 'jsonc', 'json5'] },
  // Ferris is about 2:1 wide; this square crop keeps the whole crab without clipping the claws.
  { id: 'rust', source: 'svg:ferris.svg', viewBox: '120 60 960 960', ext: ['rs'], names: ['Cargo.toml', 'Cargo.lock'] },

  // Docs and data
  { id: 'readme', source: 'glyph:readme', names: ['README', 'README.md', 'README.txt', 'README.rst'] },
  { id: 'license', source: 'glyph:license', names: ['LICENSE', 'LICENSE.md', 'LICENSE.txt', 'LICENCE', 'LICENCE.md', 'COPYING', 'UNLICENSE'] },
  { id: 'markdown', source: 'si:markdown', color: 'currentColor', ext: ['md', 'markdown', 'mdx'] },
  { id: 'text', source: 'glyph:text', ext: ['txt', 'log', 'rst'] },
  { id: 'pdf', source: 'glyph:pdf', ext: ['pdf'] },
  { id: 'csv', source: 'glyph:table', ext: ['csv', 'tsv', 'xlsx', 'xls'] },
  { id: 'image', source: 'glyph:picture', color: '#1fa985', ext: ['png', 'jpg', 'jpeg', 'gif', 'webp', 'avif', 'bmp', 'ico'] },
  { id: 'svg', source: 'glyph:picture', color: '#E8920C', ext: ['svg'] },

  // Config
  { id: 'yaml', source: 'si:yaml', color: '#CB171E', ext: ['yml', 'yaml'] },
  { id: 'toml', source: 'si:toml', color: '#9C4121', ext: ['toml'] },
  { id: 'env', source: 'glyph:key', ext: ['env'], names: ['.env', '.env.local', '.env.example', '.env.development', '.env.production', '.env.test'] },
  { id: 'git', source: 'si:git', color: '#F03C2E', names: ['.gitignore', '.gitattributes', '.gitmodules', '.gitkeep', '.mailmap', '.git-blame-ignore-revs'] },
  { id: 'docker', source: 'si:docker', color: '#2496ED', ext: ['dockerfile'], names: ['Dockerfile', '.dockerignore', 'docker-compose.yml', 'docker-compose.yaml', 'compose.yml', 'compose.yaml'] },
  { id: 'shell', source: 'si:gnubash', color: '#4EAA25', ext: ['sh', 'bash', 'zsh', 'fish'], names: ['.bashrc', '.zshrc', '.profile', '.bash_profile'] },

  // Tools. Black official logos use currentColor: Orca paints them in the row's text color, so they work on light and dark themes.
  { id: 'vite', source: 'si:vite', color: '#9135FF', names: ['vite.config.ts', 'vite.config.js', 'vite.config.mts', 'vite.config.mjs', 'vite.config.cts', 'vite.config.cjs'] },
  { id: 'nextjs', source: 'si:nextdotjs', color: 'currentColor', names: ['next.config.js', 'next.config.mjs', 'next.config.ts'] },
  {
    id: 'nestjs', source: 'si:nestjs', color: '#E0234E', names: ['nest-cli.json', '.nestcli.json'],
    ext: ['controller.ts', 'service.ts', 'module.ts', 'guard.ts', 'pipe.ts', 'interceptor.ts', 'filter.ts', 'middleware.ts', 'gateway.ts', 'resolver.ts', 'decorator.ts'],
  },
  { id: 'pnpm', source: 'si:pnpm', color: '#F69220', names: ['pnpm-lock.yaml', 'pnpm-workspace.yaml', '.pnpmfile.cjs'] },
  { id: 'nodejs', source: 'si:nodedotjs', color: '#5FA04E', names: ['package.json', '.nvmrc', '.node-version'] },
  { id: 'prettier', source: 'si:prettier', color: '#F7B93E', names: ['.prettierrc', '.prettierrc.json', '.prettierrc.json5', '.prettierrc.yml', '.prettierrc.yaml', '.prettierrc.toml', '.prettierrc.js', '.prettierrc.cjs', '.prettierrc.mjs', '.prettierrc.ts', 'prettier.config.js', 'prettier.config.cjs', 'prettier.config.mjs', 'prettier.config.ts', '.prettierignore'] },
  { id: 'biome', source: 'si:biome', color: '#60A5FA', names: ['biome.json', 'biome.jsonc'] },
  // shortcut: Fastify has no file of its own, so it ships no mappings yet; add folder or file names when a convention appears.
  { id: 'fastify', source: 'si:fastify', color: 'currentColor' },
]

// Named folders: gray folder + colored badge. Each name costs 2 mappings (closed + open).
export const folders = [
  { id: 'src', badge: '#8b5cf6', glyph: 'glyph:code', names: ['src', 'source'] },
  { id: 'test', badge: '#7cb342', glyph: 'glyph:flask', names: ['test', 'tests', '__tests__', 'spec', 'e2e'] },
  { id: 'docs', badge: '#4f8fd6', glyph: 'glyph:lines', names: ['docs', 'doc'] },
  { id: 'assets', badge: '#1fa985', glyph: 'glyph:image', names: ['assets', 'public', 'static', 'images', 'img'] },
  { id: 'git', badge: '#F03C2E', glyph: 'si:git', names: ['.git'] },
  { id: 'github', badge: '#3b434c', glyph: 'si:github', names: ['.github'] },
  { id: 'node', badge: '#5FA04E', glyph: 'si:nodedotjs', names: ['node_modules'] },
  { id: 'components', badge: '#1b8fb3', glyph: 'si:react', names: ['components'] },
  { id: 'next', badge: '#3b434c', glyph: 'si:nextdotjs', names: ['.next'] },
]
