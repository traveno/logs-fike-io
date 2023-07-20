const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
        sans: ['Niramit', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
      },
      typography (theme) {
        return {
          DEFAULT: {
            css: {
              'code::before': {
                // content: 'none', // don’t generate the pseudo-element
               content: '""', // this is an alternative: generate pseudo element using an empty string
              },
              'code::after': {
                content: 'none'
              },
              code: {
                color: theme('colors.neutral.700'),
                backgroundColor: theme('colors.neutral.300'),
                borderRadius: theme('borderRadius.DEFAULT'),
                paddingLeft: theme('spacing[1.5]'),
                paddingRight: theme('spacing[1.5]'),
                paddingTop: theme('spacing.1'),
                paddingBottom: theme('spacing.1'),
              },
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}