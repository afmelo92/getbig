const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kufam']
      },
    }
  },
  colors: {
    gray: colors.trueGray,
    ...colors
  },
  variants: {
    extend: {}
  },
  plugins: []
}
 