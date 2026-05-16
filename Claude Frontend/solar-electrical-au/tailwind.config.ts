import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:'#FFF7ED', 100:'#FFEDD5', 200:'#FED7AA', 300:'#FDBA74',
          400:'#FB923C', 500:'#F97316', 600:'#EA580C', 700:'#C2410C',
          800:'#9A3412', 900:'#7C2D12', 950:'#431407'
        },
        secondary: {
          50:'#F0F9FF', 100:'#E0F2FE', 200:'#BAE6FD', 300:'#7DD3FC',
          400:'#38BDF8', 500:'#0EA5E9', 600:'#0284C7', 700:'#0369A1',
          800:'#075985', 900:'#0C4A6E', 950:'#082F49'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(0,0,0,0.05),0 2px 4px -1px rgba(0,0,0,0.03)',
        'soft-lg': '0 10px 15px -3px rgba(0,0,0,0.05),0 4px 6px -2px rgba(0,0,0,0.03)'
      }
    }
  },
  plugins: []
}
export default config