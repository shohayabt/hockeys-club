/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors:{
      "main":"#FF4240",
      "blue":"#629CF31A",
      "white":"#ffffff",
      "black":"#0F0F0F",
      "grey":"rgba(19, 19, 24, 0.2)"
    },
    extend: {
      fontFamily: {
        'manrope': ["Manrope", "sans-serif"],
      },
      spacing: {
        'cmd': '5rem',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

