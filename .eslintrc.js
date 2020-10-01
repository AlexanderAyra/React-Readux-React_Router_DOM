module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-body-style': [0],
    'jsx-quotes': [2, 'prefer-single'],
    'jsx-a11y/label-has-associated-control': [0],
    'no-useless-return': [0],
    'no-unused-vars': [1],
    'object-curly-newline': ['error', { multiline: true }],
    // 'object-curly-newline': ["error", { "minProperties": 2 }] depende de los valores
    'react/prop-types': 0,
    'import/prefer-default-export': [1],
    'react/destructuring-assignment': 0,
    'import/no-extraneous-dependencies': [1],
    'semi': ["error", "never"],
    'import/prefer-default-export': 0,
    "no-use-before-define": [0],
    "no-param-reassign": [0],
    'no-underscore-dangle': [0],
    'react/jsx-props-no-spreading': [0],
    'no-shadow': [1],
    'no-return-assign': [0]
  },
};
