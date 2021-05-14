module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/eslint-recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-shadow': 'off',
    indent: ['warn', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'sort-keys': ['warn', 'asc', { caseSensitive: true, natural: true, minKeys: 2 }],
    'no-unused-vars': 'off',
    'prefer-const': ['error', {'destructuring': 'any', 'ignoreReadBeforeAssign': false}]
  },
  settings: {
    react: { version: '16.12' },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src']
      }
    }
  }
};
