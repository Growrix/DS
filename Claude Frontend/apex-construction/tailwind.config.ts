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
        brand: {
          orange: "#F26722",
          "orange-dark": "#D4551A",
          navy: "#1B2A4A",
          "navy-light": "#253660",
          "navy-dark": "#0F1C33",
          gray: "#6B7280",
          "light-bg": "#F8F8F8",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0F1C33 0%, #1B2A4A 60%, #253660 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
