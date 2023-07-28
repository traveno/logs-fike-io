const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const patterns = require('tailwindcss-hero-patterns/src/patterns');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode:  'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
        sans: ['Niramit', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
      },
      textColor: {
      }
    },
    heroPatterns: {
      circuitboard: patterns.circuitboard,
      graphpaper: patterns.graphpaper
    },
    heroPatternsShades: ['400'],
    heroPatternsColors: ['slate', 'blue'],
    heroPatternsOpacities: ['10', '50']
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-hero-patterns')],
}