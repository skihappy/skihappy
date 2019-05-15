const confusingBrowserGlobals = require('confusing-browser-globals')

const rootConfig = require('../.eslintrc')

module.exports = {
  ...rootConfig,
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['emotion', 'import', 'jsx-a11y', 'react', 'react-hooks'],
  env: {
    ...rootConfig.env,
    browser: true,
    commonjs: false,
    node: false,
  },
  rules: {
    ...rootConfig.rules,
    'no-console': 'warn',
    'no-restricted-globals': ['error', ...confusingBrowserGlobals],

    // eslint-plugin-emotion:
    'emotion/import-from-emotion': 'error',
    'emotion/jsx-import': 'error',
    'emotion/no-vanilla': 'error',
    'emotion/styled-import': 'error',
    'emotion/syntax-preference': ['error', 'string'],

    // eslint-plugin-jsx-a11y
    'jsx-a11y/label-has-associated-control': [
      'error',
      { assert: 'either', depth: 3 },
    ],

    // eslint-plugin-react (via eslint-config-airbnb)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
}
