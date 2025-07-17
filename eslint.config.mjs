import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "**/chunks/**",
      "**/static/**",
      "**/types/**",
    ],
  },
  // JavaScript files
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-empty": "warn",
      "no-useless-escape": "off",
      "no-fallthrough": "off",
      "getter-return": "warn",
      "no-sparse-arrays": "off",
      "no-misleading-character-class": "off",
      "valid-typeof": "warn",
      "no-self-assign": "warn",
      "no-unreachable": "warn",
      "no-func-assign": "off",
      "no-redeclare": "off",
      "no-control-regex": "off",
    },
  },
  // TypeScript files
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "warn",
      "no-unused-vars": "off", // Turn off base rule
      "no-undef": "off", // TypeScript handles this
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  },
];
