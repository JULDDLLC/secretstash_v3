import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: { // <--- ADD THIS BLOCK
      '2xl': ['1.5rem', { lineHeight: '1.3' }],
      '3xl': ['1.875rem', { lineHeight: '1.3' }],
      '4xl': ['2.25rem', { lineHeight: '1.3' }],
      '5xl': ['3rem', { lineHeight: '1.2' }],
      '7xl': ['4.5rem', { lineHeight: '1.2' }],
      '9xl': ['8rem', { lineHeight: '1.2' }],
    },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        'cursor-pulse': {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.7' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.5)', opacity: '1' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.7' }
        },
        float: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%, 90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-100px) rotate(360deg)', opacity: '0' }
        },
        'cosmic-drift': {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: '0.3'
          },
          '25%': { 
            transform: 'translate(-20px, -30px) rotate(1deg)',
            opacity: '0.5'
          },
          '50%': { 
            transform: 'translate(20px, -20px) rotate(-1deg)',
            opacity: '0.4'
          },
          '75%': { 
            transform: 'translate(-10px, 20px) rotate(0.5deg)',
            opacity: '0.6'
          }
        },
        'cosmic-drift-reverse': {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: '0.2'
          },
          '33%': { 
            transform: 'translate(30px, 20px) rotate(-1deg)',
            opacity: '0.4'
          },
          '66%': { 
            transform: 'translate(-20px, 30px) rotate(1deg)',
            opacity: '0.3'
          }
        },
      },
      animation: {
        gradient: 'gradient 6s ease-in-out infinite',
        'cursor-pulse': 'cursor-pulse 2s ease-in-out infinite',
        float: 'float 20s infinite linear',
        'cosmic-drift': 'cosmic-drift 20s ease-in-out infinite',
        'cosmic-drift-reverse': 'cosmic-drift-reverse 25s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;