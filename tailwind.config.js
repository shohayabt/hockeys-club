/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

