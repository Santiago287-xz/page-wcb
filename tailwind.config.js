import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom': 'var(--nextui-background)',
      },
      keyframes: {
        typewriter: {
          // 'from': { width: '0' },          
          '0%': { height: '0', borderColor: 'transparent' },
          '50%': { height: '100%', borderColor: 'white' },
          '80%': { borderColor: 'transparent' },
          '100%': { fontSize: '4.5rem' },
        },
        blink: {
          'border': { borderColor: 'transparent' },
        }
      },
      animation: {
        typewriter: 'typewriter 2s ease-in-out',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "light"
  }), require('tailwindcss-animated')],
}
