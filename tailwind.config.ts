import type { Config } from "tailwindcss"

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        'nav': '1024px',
      },
    },
    extend: {
      colors: {
        'dark-navy': '#0f0f1a',
        'deep-space': '#1a1a2e',
        'cosmic-purple': '#2a2a4a',
        'neon-pink': '#FF3CAC',
        'electric-purple': '#7D5FFF',
        'aqua-blue': '#00DBDE',
        'neon-green': '#39FF14',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      "fade-in-up": {
        "0%": { opacity: "0", transform: "translateY(20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      "text-shimmer": {
        "0%, 100%": {
          backgroundSize: "200% 200%",
          backgroundPosition: "left center",
        },
        "50%": {
          backgroundSize: "200% 200%",
          backgroundPosition: "right center",
        },
      },
      "pulse-slow": {
        "0%, 100%": {
          opacity: "0.1",
        },
        "50%": {
          opacity: "0.3",
        },
      },
      "float": {
        "0%, 100%": {
          transform: "translateY(0)",
        },
        "50%": {
          transform: "translateY(-10px)",
        },
      },
      "grid-flow": {
        "0%": {
          transform: "translateX(0) translateY(0)",
        },
        "100%": {
          transform: "translateX(20px) translateY(20px)",
        },
      },
    },
    animation: {
      "fade-in": "fade-in 0.5s ease-out",
      "fade-in-up": "fade-in-up 0.5s ease-out",
      "text-shimmer": "text-shimmer 3s ease-in-out infinite",
      "pulse-slow": "pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      "float": "float 6s ease-in-out infinite",
      "grid-flow": "grid-flow 20s linear infinite",
    },
  },
  plugins: [],
} satisfies Config

export default config