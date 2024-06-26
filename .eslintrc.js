/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'prettier',
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname)],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json'),
      },
    },
  },
  env: {
    node: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'warn',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: true,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off', // Tắt quy tắc react/prop-types cho các tệp TypeScript
      },
    },
  ],
};
