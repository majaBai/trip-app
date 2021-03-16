module.exports = {
    root: true,
    parserOptions: {
      sourceType: 'module',
      "ecmaVersion": 2017
    },
    parser: "vue-eslint-parser",
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    rules: {
      "no-unused-vars": "off"
    },
  }