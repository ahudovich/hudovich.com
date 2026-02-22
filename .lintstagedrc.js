export default {
  '*': 'oxfmt --no-error-on-unmatched-pattern',
  '*.{js,ts,tsx}': ['pnpm run lint', () => 'tsc -p tsconfig.json --noEmit'],
}
