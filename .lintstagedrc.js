export default {
  '*.{ts,astro,css,html}': 'prettier --check',
  '*.{ts,astro}': ['eslint .', () => 'tsc -p tsconfig.json --noEmit'],
}
