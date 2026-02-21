import eslint from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['.astro', '.codex', '.github', '.husky', '.vercel', '.vscode', 'dist']),
  {
    files: ['**/*.{ts,tsx,astro}'],
    extends: [eslint.configs.recommended, tseslint.configs.recommended],
  },
  {
    files: ['**/*.{tsx,astro}'],
    extends: [jsxA11y.flatConfigs.recommended],
  },
  {
    files: ['**/*.tsx'],
    extends: [react.configs.flat.recommended, react.configs.flat['jsx-runtime']],
  },
  {
    files: ['**/*.astro'],
    extends: [eslintPluginAstro.configs.recommended],
  },
])
