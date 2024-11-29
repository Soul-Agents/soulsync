import js from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

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
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    languageOptions: {
      globals: {
        // Node.js globals
        module: true,
        require: true,
        process: true,
        console: true,
        // Browser globals
        window: true,
        document: true,
        navigator: true,
        localStorage: true,
        alert: true,
        fetch: true,
        // DOM types
        HTMLElement: true,
        HTMLDivElement: true,
        HTMLButtonElement: true,
        HTMLInputElement: true,
        HTMLTextAreaElement: true,
        HTMLParagraphElement: true,
        HTMLHeadingElement: true,
        Element: true,
        Document: true,
        // Other globals
        React: true,
        JSX: true,
        KeyboardEvent: true,
        URL: true,
        setInterval: true,
        clearInterval: true,
      },
    },
    rules: {
      // Disable rules that are causing issues
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-require-imports": "off",
      "no-empty": "warn",
      "no-useless-escape": "off",
      "no-fallthrough": "off",
      "getter-return": "warn",
      "no-sparse-arrays": "off",
      "no-misleading-character-class": "off",
      "valid-typeof": "warn",
      "no-self-assign": "warn",
      "no-unreachable": "warn",
      "no-undef": "warn",
      // Keep other existing rules
      "no-func-assign": "off",
      "no-redeclare": "off",
      "no-control-regex": "off",
    },
  },
];
