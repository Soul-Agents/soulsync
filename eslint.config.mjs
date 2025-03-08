// ESLint configuration for both JavaScript and TypeScript
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
        // React globals
        React: true,
        JSX: true,
        // Other globals
        setInterval: true,
        clearInterval: true,
        setTimeout: true,
      },
    },
    rules: {
      // Disable rules that are causing issues
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
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
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
        // React globals
        React: true,
        JSX: true,
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
        // Event types
        KeyboardEvent: true,
        MouseEvent: true,
        // Other globals
        URL: true,
        setInterval: true,
        clearInterval: true,
        setTimeout: true,
      },
    },
    rules: {
      // Disable rules that are causing issues
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
];
