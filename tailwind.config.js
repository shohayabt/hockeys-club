/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors:{
      "main":"#FF4240",
      "blue":"#629CF31A",
      "white":"#ffffff"
    },
    extend: {
      fontFamily: {
        'manrope': ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

