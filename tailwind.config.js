/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Pacifico', 'cursive'],
    },
    boxShadow: {
      'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
      'custom-dark': '0 2px 8px rgba(0, 0, 0, 0.25)',
    },
  },
  plugins: [],
}
}
