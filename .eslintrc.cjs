module.exports = {
  extends: ["prettier"],
  plugins: ["@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  rules: {
    "import/no-anonymous-default-export": "off",
    "no-restricted-globals": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    curly: "warn",
    "dot-notation": "warn",
    "no-console": [
      "warn",
      {
        allow: ["warn", "error", "info"],
      },
    ],
    "no-else-return": "warn",
    "no-unneeded-ternary": "warn",
    "no-unused-expressions": "warn",
    "no-unused-vars": "off",
    "no-useless-return": "warn",
    "no-var": "warn",
    "object-shorthand": "warn",
    "one-var": ["warn", "never"],
    "prefer-arrow-callback": "warn",
    "prefer-const": [
      "warn",
      {
        destructuring: "all",
      },
    ],
    "prefer-template": "warn",
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
  },
  parserOptions: {
    // ...
    sourceType: "script",
  },
};
