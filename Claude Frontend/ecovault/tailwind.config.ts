import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef5ec',
          100: '#d5e8d0',
          200: '#aacfa0',
          300: '#78b06e',
          400: '#52914a',
          500: '#3a7334',   // mid green
          600: '#2e5c28',   // main brand green
          700: '#254922',
          800: '#1c381a',
          900: '#152a13',
          950: '#0c1a0b',
        },
        accent: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f0b429',   // main golden accent
          500: '#d99e1c',
          600: '#b98213',
          700: '#8f620c',
          800: '#6b4908',
          900: '#4a3206',
        },
        forest: {
          DEFAULT: '#1c3019',
          dark: '#12200f',
          mid: '#243d20',
          light: '#2e4d29',
        },
        neutral: {
          50:  '#f8faf7',
          100: '#eef2ed',
          200: '#d9e2d7',
          300: '#b8c9b5',
          400: '#8ea88b',
          500: '#698766',
          600: '#516950',
          700: '#41543f',
          800: '#354436',
          900: '#2c3829',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['4.5rem',  { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg':  ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-md':  ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'display-sm':  ['1.875rem',{ lineHeight: '1.25' }],
        'heading-lg':  ['1.5rem',  { lineHeight: '1.35' }],
        'heading-md':  ['1.25rem', { lineHeight: '1.4'  }],
        'heading-sm':  ['1.125rem',{ lineHeight: '1.45' }],
        'body-lg':     ['1.125rem',{ lineHeight: '1.7'  }],
        'body-md':     ['1rem',    { lineHeight: '1.65' }],
        'body-sm':     ['0.875rem',{ lineHeight: '1.6'  }],
        'caption':     ['0.75rem', { lineHeight: '1.5'  }],
      },
      spacing: {
        '4.5':  '1.125rem',
        '13':   '3.25rem',
        '15':   '3.75rem',
        '17':   '4.25rem',
        '18':   '4.5rem',
        '22':   '5.5rem',
        '26':   '6.5rem',
        '30':   '7.5rem',
        '34':   '8.5rem',
        '38':   '9.5rem',
        section:'5rem',
      },
      maxWidth: {
        'site': '1280px',
        'prose': '68ch',
        'narrow': '52ch',
      },
      borderRadius: {
        'xs': '0.25rem',
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'xs':     '0 1px 3px rgba(0,0,0,0.06)',
        'sm':     '0 2px 8px rgba(0,0,0,0.08)',
        'md':     '0 4px 16px rgba(0,0,0,0.10)',
        'lg':     '0 8px 32px rgba(0,0,0,0.12)',
        'xl':     '0 16px 48px rgba(0,0,0,0.16)',
        'card':   '0 4px 20px rgba(0,0,0,0.08)',
        'card-hover':'0 8px 40px rgba(0,0,0,0.14)',
        'green':  '0 8px 30px rgba(46,92,40,0.35)',
        'accent': '0 8px 30px rgba(240,180,41,0.30)',
        'inner':  'inset 0 2px 8px rgba(0,0,0,0.06)',
      },
      backgroundImage: {
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'leaf-pattern': "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M40 0C18 0 0 18 0 40s18 40 40 40 40-18 40-40S62 0 40 0zm0 72C22.3 72 8 57.7 8 40S22.3 8 40 8s32 14.3 32 32-14.3 32-32 32z'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out both',
        'fade-in':    'fadeIn 0.4s ease-out both',
        'slide-in':   'slideIn 0.5s ease-out both',
        'scale-in':   'scaleIn 0.4s ease-out both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      gridTemplateColumns: {
        'auto-fit-280': 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-fit-320': 'repeat(auto-fit, minmax(320px, 1fr))',
        'auto-fit-360': 'repeat(auto-fit, minmax(360px, 1fr))',
      },
    },
  },
  plugins: [],
}

export default config
