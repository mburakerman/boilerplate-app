module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: [
    "react",
    "react-refresh",
    "@typescript-eslint",
    "functional",
    "formatjs",
  ],
  rules: {
    // @typescript-eslint
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",

    // react-refresh
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // react
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: false,
      },
    ],

    // formatjs
    "formatjs/enforce-id": [
      "error",
      {
        idInterpolationPattern: "[sha512:contenthash:base64:6]",
      },
    ],
    "formatjs/enforce-default-message": "error",
    "formatjs/enforce-placeholders": [
      "error",
      {
        ignoreList: ["b", "NEW_LINE"],
      },
    ],
    "formatjs/no-emoji": "warn",
    "formatjs/no-literal-string-in-jsx": "warn",
    "formatjs/no-multiple-whitespaces": "error",
    "formatjs/no-multiple-plurals": "error",
    "formatjs/no-offset": "error",
    "formatjs/no-complex-selectors": [
      "error",
      {
        limit: 3,
      },
    ],

    // prettier
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
      },
    ],

    "no-unneeded-ternary": "error",
    "no-else-return": "warn",
    "no-eq-null": "warn",
    "no-lonely-if": "warn",
    "prefer-template": "warn",
    "no-unmodified-loop-condition": "warn",
    "no-undef-init": "warn",
    "no-lone-blocks": "warn",
    "no-var": "warn",
    "prefer-const": "warn",
    "no-void": "warn",
    "no-param-reassign": "warn",
    "no-use-before-define": "off",
    "valid-jsdoc": "warn",
    "prefer-spread": "error",
  },
};
