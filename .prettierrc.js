const tailwind = require('prettier-plugin-tailwindcss');

module.exports = {
  plugins: [tailwind],
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  eslintIntegration: true,
  jsxSingleQuote: true,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
};
