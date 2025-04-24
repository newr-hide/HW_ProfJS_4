module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true 
  },
  parser: '@babel/eslint-parser',
  plugins: ['jest'],
  rules: {
    'semi': 'error',
        'no-unused-vars': 'off',
      }
};
  