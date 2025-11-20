import path from 'node:path'

const eslintCommand = (filenames) =>
  `eslint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

const config = {
  '*.{ts,tsx}': [() => 'tsc -p tsconfig.json --noEmit', eslintCommand],
  '*.{js,mjs,cjs,ts,tsx,css}': ['prettier --check'],
}

export default config
