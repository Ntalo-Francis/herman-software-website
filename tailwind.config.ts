import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1F3F",
          light: "#132F52",
          dark: "#07182E",
        },
        teal: {
          DEFAULT: "#00C2BA",
          dark: "#00A8A0",
        },
        charcoal: "#2D3748",
        gray: {
          light: "#F8F9FA",
          medium: "#A0AEC0",
        },
        success: "#38A169",
        warning: "#D69E2E",
        error: "#E53E3E",
        info: "#3182CE",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "6px",
        card: "8px",
        modal: "12px",
        full: "9999px",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "6rem",
      },
      boxShadow: {
        card: "0 4px 12px rgba(10, 31, 63, 0.08)",
        cardHover: "0 8px 24px rgba(10, 31, 63, 0.12)",
        button: "0 2px 8px rgba(0, 194, 186, 0.3)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;