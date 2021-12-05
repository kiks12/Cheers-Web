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
    extend: {
      width: {
        'full-hover': '105%',
        '1/4-m-1': '24.5%',
        '1/3-m-1': '32.5%',
        '1/2-m-1': '48.5%',
      },
      height: {
        'full-hover': '105%',
        '1/4-m-1': '24%',
        '1/3-m-1': '32.2%',
        '1/2-m-1': '48.2%',
      },
    },
    screens:{
      'sm': '300px',
      'md': '768px',
      'lg': '1280px',
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"]
  },
  plugins: [],
}
