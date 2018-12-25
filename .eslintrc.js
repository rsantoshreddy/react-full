module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react", "ejs"],
  rules: {
    "react/prop-types": ["off"],
    indent: ["error", "tab"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": 0,
    "no-unused-vars": 0
  }
};