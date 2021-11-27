const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/Components/**/*.{js, ts, jsx, tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      transparent: "transparent",
      black:{
        DEFAULT: "#2D2D2D"
      },
      white:{
        light: "#FFFFFF",
        DEFAULT: "#F8F8F8"
      },
      gray: colors.gray,
      yellow: colors.yellow,
      red: colors.red,
      indigo: colors.indigo
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
