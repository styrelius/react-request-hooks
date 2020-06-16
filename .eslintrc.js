module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent'],
          ['sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
  },
};
