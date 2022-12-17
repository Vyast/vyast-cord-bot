module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    semi: ["error", "always"],
    "no-var": "error",
    "no-trailing-spaces": ["error"],
    "no-multi-spaces": "error",
    "prefer-const": "error",
    "@typescript-eslint/no-explicit-any": "warn",
  },
};
