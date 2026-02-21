import eslint from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['.astro', '.codex', '.github', '.husky', '.vercel', '.vscode', 'dist']),
  {
    files: ['**/*.{ts,tsx,astro}'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      jsxA11y.flatConfigs.recommended,
    ],
  },
  {
    files: ['**/*.astro'],
    extends: [eslintPluginAstro.configs.recommended],
  },
])
