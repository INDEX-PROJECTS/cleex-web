module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/stylistic",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/warnings",
    "plugin:import/errors",
    "plugin:import/typescript",
    "next/core-web-vitals",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "promise",
    "react",
    "react-hooks",
    "@typescript-eslint",
    "import",
    "prettier",
  ],
  settings: {
    "import/settings": {
      typescript: true,
      node: true,
    },
  },
  rules: {
    //? PRETTIER
    "prettier/prettier": "error",

    //? DEFAULT
    "no-unused-vars": "warn",
    "no-template-curly-in-string": "error",
    "arrow-body-style": ["error", "always"],
    camelcase: ["error", { properties: "always" }],
    curly: ["error", "all"],
    "default-case": "error",
    "default-case-last": "error",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "max-params": ["warn", 3],
    "no-console": "warn",
    "no-empty": "error",
    "no-extra-boolean-cast": "error",

    //? COMBINE
    "no-duplicate-imports": "off",
    "react/display-name": "off",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      },
    ],

    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",

    //? TYPESCRIPT
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/no-duplicate-enum-values": "warn",
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],

    //? PROMISE
    "promise/catch-or-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/no-nesting": "error",
    "promise/no-return-in-finally": "warn",
    "promise/valid-params": "warn",

    //? REACT
    "react/hook-use-state": "error",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "ignore" },
    ],
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/no-array-index-key": "error",
    "react/self-closing-comp": ["error", { component: true }],
    "react/no-danger": "error",
    "react/no-unstable-nested-components": "error",
    "react/react-in-jsx-scope": "off",

    //? REACT HOOKS
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",

    //? IMPORT
    "import/no-deprecated": "warn",
    "import/no-dynamic-require": "warn",
    "import/no-mutable-exports": "error",
    "import/no-empty-named-blocks": "error",
    "import/no-unresolved": "error",
    "import/no-cycle": "error",
    "import/no-self-import": "error",
    "import/no-duplicates": "error",
    "import/newline-after-import": "error",
    "import/no-useless-path-segments": "error",
    "import/first": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "index",
          "sibling",
          "parent",
          "object",
          "type",
        ],
      },
    ],
    "import/no-internal-modules": [
      "error",
      {
        forbid: [
          "@/app/*",

          "@/features/**/*",
          "@/entities/store/**",

          "@/shared/hook/**",
          "@/shared/functions/**",
          "@/shared/config/**",
          "@/shared/constants/**",
          "@/shared/http/**",
          "@/shared/model/**",
          "@/shared/types/**",
          "@/shared/wrapper/**",
          "@/shared/theme/**",
        ],
      },
    ],
  },
};
