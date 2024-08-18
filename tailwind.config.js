/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors:{
      "main":"#FF4240",
      "blue":"rgba(76, 141, 241, 1)",
      "white":"#ffffff",
      "black":"#0F0F0F",
      "grey":"rgba(19, 19, 24, 0.2)",
      "green":"rgba(73, 210, 147, 1)",
      "yellow":"rgba(255, 181, 70, 1)",
      "cc":"#EEEDEB",
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

