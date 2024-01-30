/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./**/index.html",
    "./**/*.js",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      semiblack: '#231f20',
      white: colors.white,
      gray: colors.gray,
      yellow: '#FCF000'
    },
    fontFamily: {
      sans: ['PT Sans', 'sans-serif'],
      serif: ['PT Serif', 'serif'],
      chaney: ['Chaney', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
