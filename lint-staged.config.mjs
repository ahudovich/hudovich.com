const config = {
  '*.{ts,tsx}': [() => 'tsc -p tsconfig.json --noEmit', 'eslint .'],
  '*.{js,mjs,cjs,ts,tsx,css}': ['prettier --check'],
}

export default config
