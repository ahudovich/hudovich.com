import eslint from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import unicorn from 'eslint-plugin-unicorn'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

const config = defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  unicorn.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  jsxA11y.flatConfigs.recommended,

  globalIgnores(['.astro', '.codex', '.github', '.husky', '.vercel', '.vscode', 'dist']),

  {
    rules: {
      // Custom rules
    },
  },
])

export default config
