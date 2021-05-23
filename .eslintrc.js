module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 'off',
    'semi': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-restricted-globals': 'off',
  },
};
