module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true 
  },
  "parserOptions": {
    "ecmaVersion": 6
  },
  parser: '@babel/eslint-parser',
  plugins: ['jest'],
  rules: {
    'semi': 'error',
        'no-unused-vars': 'off',
      }
};
  