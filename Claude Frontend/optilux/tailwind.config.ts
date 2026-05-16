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
        primary: {
          DEFAULT: "#00B5A3",
          50: "#E5F8F6",
          100: "#CCEFEC",
          200: "#99DFD9",
          300: "#66CFC6",
          400: "#33BFB3",
          500: "#00B5A3",
          600: "#009082",
          700: "#006B62",
          800: "#004741",
          900: "#002221",
        },
        dark: {
          DEFAULT: "#0C3D4A",
          navy: "#0B3547",
          footer: "#0D3D4E",
        },
        mint: {
          DEFAULT: "#EAF8F6",
          light: "#F0FAF9",
        },
        heading: "#1B3C4A",
        muted: "#6B8A95",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
