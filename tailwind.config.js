/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./index.css","./script.js"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "'Poppins', sans-serif"
      },
      colors: {
        "very-dark": "#06070F",
        "dark": "#10111A",
        "dark-secondary": "#25262E",
        "pink": "#CA64BF",
        "orange": "#F37A53",
        "green": "#48BB9B",
        "light": "#E0E3ED"
      }
    },
  },
  plugins: [],
}
