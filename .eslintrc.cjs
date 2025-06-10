/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  // extends: ['eslint:recommended', 'plugin:storybook/recommended'],
  extends: ['eslint:recommended'],

  ignorePatterns: ['build', 'dist', 'public'],

  parserOptions: {
    sourceType:  'module',
    ecmaVersion: 'latest'
  },

  env: {
    browser: true,
    node:    true
  },

  rules: {
    // 'no-console': ['error', {allow: ['warn', 'error', 'info']}],
    'no-console': 'off',

    'quotes': ['error', 'single', {'allowTemplateLiterals': true}],

    'semi': ['error', 'always'],

    'no-extra-semi': 'error',

    'no-debugger': 'error',

    'semi-spacing': 'error',

    'no-extra-boolean-cast': 'off',

    'no-case-declarations': 'off'
  }
};
