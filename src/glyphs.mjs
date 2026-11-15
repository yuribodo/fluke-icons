// Fluke's own drawings, on a 16×16 grid. Each value is SVG markup for a 0 0 16 16 viewBox.
// `{fg}` is replaced with the glyph color, so badge glyphs can be drawn white.

export const FOLDER_GRAY = '#8b8f9c'

export const glyphs = {
  file: `<path fill="#8a90a0" d="M3.5 1.5h5.6l3.4 3.4v8.6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V2.5a1 1 0 0 1 1-1z"/><path fill="#5d6272" d="M9.1 1.5v2.6a.8.8 0 0 0 .8.8h2.6z"/>`,
  folder: `<path fill="${FOLDER_GRAY}" fill-opacity=".92" d="M1.5 4a1 1 0 0 1 1-1h3.6a1 1 0 0 1 .8.4l.8 1.1h5.8a1 1 0 0 1 1 1V12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z"/>`,
  'folder-open': `<path fill="${FOLDER_GRAY}" fill-opacity=".92" d="M1.5 12V4a1 1 0 0 1 1-1h3.6a1 1 0 0 1 .8.4l.8 1.1h5a1 1 0 0 1 1 1v1H5.2a1 1 0 0 0-.94.66L2.4 12.6zM2.4 13h10.4a1 1 0 0 0 .94-.66l1.4-4a.75.75 0 0 0-.7-1H5.2a1 1 0 0 0-.94.66z"/>`,

  // Go gopher face, drawn from circles. The gopher was designed by Renée French (CC BY 4.0); this drawing is ours.
  gopher: `<circle cx="3" cy="4" r="1.7" fill="#00ADD8"/><circle cx="13" cy="4" r="1.7" fill="#00ADD8"/><rect x="2" y="2.4" width="12" height="13" rx="5.6" fill="#00ADD8"/><circle cx="5.2" cy="6.6" r="2.4" fill="#fff"/><circle cx="10.8" cy="6.6" r="2.4" fill="#fff"/><circle cx="5.7" cy="6.9" r="1.05" fill="#1c1b22"/><circle cx="11.3" cy="6.9" r="1.05" fill="#1c1b22"/><ellipse cx="8" cy="10.5" rx="2.3" ry="1.6" fill="#F6D2A2"/><ellipse cx="8" cy="9.5" rx="1.1" ry=".75" fill="#1c1b22"/><rect x="7.35" y="11" width="1.3" height="1.5" rx=".3" fill="#fff"/>`,

  // JSON has no brand color: amber curly braces.
  json: `<path fill="none" stroke="#E0950F" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M6 2.5c-1.6 0-2 .8-2 2v1.2c0 .9-.6 1.5-1.5 1.8.9.3 1.5.9 1.5 1.8v1.2c0 1.2.4 2 2 2M10 2.5c1.6 0 2 .8 2 2v1.2c0 .9.6 1.5 1.5 1.8-.9.3-1.5.9-1.5 1.8v1.2c0 1.2-.4 2-2 2"/><circle cx="8" cy="8" r="1.15" fill="#E0950F"/>`,

  // Own drawings for files that have no brand. Page shape matches `file`.
  text: `<path fill="none" stroke="#8E9AAF" stroke-width="1.8" stroke-linecap="round" d="M2.5 3.5h11M2.5 6.5h11M2.5 9.5h11M2.5 12.5h7"/>`,
  pdf: `<path fill="#E5252A" d="M3.5 1.5h5.6l3.4 3.4v8.6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V2.5a1 1 0 0 1 1-1z"/><path fill="#A81A1E" d="M9.1 1.5v2.6a.8.8 0 0 0 .8.8h2.6z"/><path fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round" d="M4.8 8h6.4M4.8 10.3h6.4M4.8 12.6h3.6"/>`,
  license: `<path fill="#B0861A" d="M5 9.4 3.8 14.6l2-1 1.2 1.4.9-4.4zM11 9.4l1.2 5.2-2-1-1.2 1.4-.9-4.4z"/><circle cx="8" cy="6.6" r="4.9" fill="#D4A72C"/><circle cx="8" cy="6.6" r="2.4" fill="none" stroke="#fff" stroke-width="1.2"/>`,
  readme: `<circle cx="8" cy="8" r="6.8" fill="#2F81F7"/><circle cx="8" cy="4.8" r="1.15" fill="#fff"/><rect x="7" y="6.8" width="2" height="5.4" rx="1" fill="#fff"/>`,
  picture: `<rect x="2" y="3" width="12" height="10" rx="1.6" fill="none" stroke="{fg}" stroke-width="1.5"/><path fill="{fg}" d="M3.4 11.8 6.6 7.6l2.4 2.8 1.7-1.9 2 3.3z"/><circle cx="10.9" cy="6.1" r="1.25" fill="{fg}"/>`,
  table: `<rect x="1.5" y="2.5" width="13" height="11" rx="1.5" fill="#2E9E5B"/><path fill="none" stroke="#fff" stroke-width="1.1" d="M1.5 6.3h13M1.5 9.9h13M6.3 6.3v7.2"/>`,
  key: `<g fill="none" stroke="#D9B826" stroke-width="2" stroke-linecap="round"><circle cx="5" cy="10.8" r="3"/><path d="M7.2 8.6 13.6 2.2M11.4 4.4l1.9 1.9M9.5 6.3l1.4 1.4"/></g>`,

  // Badge glyphs (drawn in {fg}, shown small inside a folder badge).
  code: `<path fill="none" stroke="{fg}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M5.5 4 1.5 8l4 4M10.5 4l4 4-4 4"/>`,
  flask: `<path fill="{fg}" stroke="{fg}" stroke-width="1.6" stroke-linejoin="round" d="M5.6 1.5h4.8M6.4 1.5v4.8L2.3 13a1.2 1.2 0 0 0 1 1.8h9.4a1.2 1.2 0 0 0 1-1.8L9.6 6.3V1.5z"/>`,
  lines: `<path fill="none" stroke="{fg}" stroke-width="2.2" stroke-linecap="round" d="M2.5 3.5h11M2.5 8h11M2.5 12.5h7"/>`,
  image: `<path fill="{fg}" d="M1 13.5 5.5 7l3.3 4 2-2.4 4.2 4.9z"/><circle cx="11.5" cy="4" r="2" fill="{fg}"/>`,
}

// Python: the Simple Icons path (CC0) split into its two snakes so each gets its official color.
export const python = {
  viewBox: '0 0 24 24',
  body: `<path fill="#3776AB" d="M11.858 0c-.978.005-1.913.088-2.736.234C6.7.662 6.26 1.558 6.26 3.21v2.182h5.725v.727H4.111c-1.664 0-3.121 1-3.577 2.903-.526 2.181-.549 3.542 0 5.82.407 1.694 1.379 2.902 3.043 2.902h1.969v-2.616c0-1.89 1.635-3.557 3.576-3.557h5.72c1.591 0 2.862-1.31 2.862-2.91v-5.45c0-1.553-1.309-2.718-2.863-2.977A18 18 0 0 0 11.858 0M8.762 1.755c.591 0 1.074.491 1.074 1.095 0 .601-.483 1.087-1.074 1.087A1.08 1.08 0 0 1 7.688 2.85c0-.604.48-1.095 1.074-1.095"/><path fill="#FFD43B" d="M18.418 6.119v2.543c0 1.971-1.671 3.63-3.577 3.63H9.122c-1.566 0-2.862 1.34-2.862 2.91v5.452c0 1.551 1.349 2.464 2.862 2.91 1.813.532 3.55.628 5.72 0 1.44-.418 2.862-1.258 2.862-2.91V18.47h-5.719v-.727h8.582c1.664 0 2.284-1.16 2.862-2.903.598-1.793.573-3.518 0-5.819-.41-1.656-1.196-2.903-2.862-2.903zM15.202 19.926a1.08 1.08 0 0 1 1.074 1.088c0 .604-.48 1.094-1.074 1.094-.592 0-1.075-.49-1.075-1.094 0-.601.483-1.088 1.075-1.088"/>`,
}
