/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors:{
      "main":"#FF4240"
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

