const OFF = 'off'
const WARN = 'warn' // eslint-disable-line
const ON = 'error' // eslint-disable-line

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': ON,
    'react/prop-types': OFF,
  },
}
