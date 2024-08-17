/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors:{
      "main":"#FF4240",
      "blue":"#629CF31A",
      "white":"#ffffff",
      "black":"#0F0F0F",
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

