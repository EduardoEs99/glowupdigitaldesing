import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SN PRO', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        primary: '#8b5cf6', // Violet
        secondary: '#d946ef', // Fuchsia
        accent: '#06b6d4', // Cyan
      },
      animation: {
        blob: 'blob 7s infinite',
        float: 'float 6s ease-in-out infinite',
        'icon-wiggle': 'iconWiggle 0.8s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        iconWiggle: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-2px) rotate(-8deg)' },
          '50%': { transform: 'translateY(0) rotate(0deg)' },
          '75%': { transform: 'translateY(-2px) rotate(8deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
