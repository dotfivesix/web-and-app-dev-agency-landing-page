/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "'Poppins', sans-serif"
      },
      colors: {
        "dark": "#10111A",
        "dark-secondary": "#171826",
        "pink": "#CA64BF",
        "orange": "#F37A53",
        "green": "#48BB9B",
        "light": "#E0E3ED"
      }
    },
  },
  plugins: [],
}
