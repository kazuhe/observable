module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "prettier/prettier": ["error", {
      "singleQuote": true, // singleQuoteを有効
      "semi": false, // セミコロンを禁止
      "no-extra-semi": "error", // 余分なセミコロンを禁止
      "no-unexpected-multiline": "error", // 意図に反して2つの文が接続された箇所を警告
    }]
  },
};
