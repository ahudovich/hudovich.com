import path from 'node:path'

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

const config = {
  '*.{ts,tsx}': [buildEslintCommand],
  '*.{js,ts,tsx,css}': ['prettier --check .'],
}

export default config
