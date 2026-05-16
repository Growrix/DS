import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        primary: {
          DEFAULT: "#1B2D5E",
          50:  "#eef1f9",
          100: "#cdd5ed",
          200: "#9babd9",
          300: "#6981c5",
          400: "#3757b1",
          500: "#1B2D5E",
          600: "#162549",
          700: "#101c37",
          800: "#0b1224",
          900: "#050912",
        },
        accent: {
          DEFAULT: "#F07830",
          50:  "#fef3ec",
          100: "#fcd9bf",
          200: "#f9b68a",
          300: "#f69355",
          400: "#f37020",
          500: "#F07830",
          600: "#c0601f",
          700: "#90480f",
          800: "#603000",
          900: "#301800",
        },
        neutral: {
          50:  "#f9f9f9",
          100: "#f0f0f0",
          200: "#e0e0e0",
          300: "#c8c8c8",
          400: "#a0a0a0",
          500: "#737373",
          600: "#555555",
          700: "#404040",
          800: "#2a2a2a",
          900: "#1a1a1a",
        },
        dark: "#0F1C3F",
        light: "#F7F8FC",
      },
      fontFamily: {
        display: ["'Barlow Condensed'", "sans-serif"],
        body:    ["'DM Sans'", "sans-serif"],
        accent:  ["'Barlow'", "sans-serif"],
      },
      fontSize: {
        "ds-xs":   ["0.75rem",  { lineHeight: "1rem" }],
        "ds-sm":   ["0.875rem", { lineHeight: "1.25rem" }],
        "ds-base": ["1rem",     { lineHeight: "1.625rem" }],
        "ds-lg":   ["1.125rem", { lineHeight: "1.75rem" }],
        "ds-xl":   ["1.25rem",  { lineHeight: "1.875rem" }],
        "ds-2xl":  ["1.5rem",   { lineHeight: "2rem" }],
        "ds-3xl":  ["1.875rem", { lineHeight: "2.25rem" }],
        "ds-4xl":  ["2.25rem",  { lineHeight: "2.5rem" }],
        "ds-5xl":  ["3rem",     { lineHeight: "1.1" }],
        "ds-6xl":  ["3.75rem",  { lineHeight: "1.05" }],
        "ds-7xl":  ["4.5rem",   { lineHeight: "1" }],
        "ds-8xl":  ["6rem",     { lineHeight: "0.95" }],
      },
      spacing: {
        "section-sm": "4rem",
        "section-md": "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },
      maxWidth: {
        container: "1240px",
        "container-sm": "960px",
        "container-xs": "720px",
      },
      borderRadius: {
        "ds-sm": "4px",
        "ds-md": "8px",
        "ds-lg": "12px",
        "ds-xl": "16px",
        "ds-2xl":"24px",
      },
      boxShadow: {
        "ds-sm":  "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
        "ds-md":  "0 4px 12px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)",
        "ds-lg":  "0 10px 30px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)",
        "ds-xl":  "0 20px 50px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.08)",
        "accent": "0 4px 20px rgba(240,120,48,0.35)",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
      backgroundImage: {
        "gradient-hero":    "linear-gradient(135deg, #0F1C3F 0%, #1B2D5E 60%, #243a7a 100%)",
        "gradient-section": "linear-gradient(180deg, #F7F8FC 0%, #FFFFFF 100%)",
        "gradient-accent":  "linear-gradient(135deg, #F07830 0%, #e05e18 100%)",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease-out forwards",
        "fade-in":    "fadeIn 0.5s ease-out forwards",
        "slide-left": "slideLeft 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
