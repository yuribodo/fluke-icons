# Fluke Icons

Flat file and folder icons for [Orca](https://github.com/stablyai/orca). Each technology gets its official brand color, and folders stay a quiet gray, with a small colored badge on the common ones (`src`, `test`, `docs`, `.github`, `node_modules`…).

## Install

```sh
orca plugin install yuribodo/fluke-icons
```

Then pick **Fluke Icons** as the icon theme in Orca's settings.

## Coverage (v0.1)

- **Languages:** JavaScript, TypeScript, React (`.jsx`/`.tsx`), Go (the gopher), Python, Rust (Ferris)
- **Data:** JSON (`.json`, `.jsonc`, `.json5`)
- **Tools:** Vite, Next.js, NestJS (including `*.controller.ts`, `*.service.ts`, `*.module.ts`…), pnpm, Node.js
- **Folders:** `src`, `test`/`tests`/`__tests__`/`spec`/`e2e`, `docs`, `assets`/`public`/`static`/`images`, `.github`, `node_modules`, `components`, `.next`

Next.js and Fastify are drawn in `currentColor`, so they follow the row's text color on light and dark themes.

## Develop

Everything is generated from `icons.config.mjs` by a dependency-free Node script:

```sh
node tools/build.mjs        # writes icons/*.svg, icons/theme.json and preview.html
orca plugin validate .
orca plugin dev watch .     # load the folder into Orca and reload on changes
```

The build fails if the theme goes over Orca's limits (512 mappings, 512 SVGs, 64 KiB per SVG, 4 MiB total) or maps the same name twice. Open `preview.html` to see every icon at 16 and 32px on dark and light backgrounds.

To add an icon: drop the source SVG in `src/logos/` (or draw a glyph in `src/glyphs.mjs`), add an entry to `icons.config.mjs`, and rebuild.

## Credits

See [NOTICE.md](NOTICE.md). Code and original drawings are MIT.
