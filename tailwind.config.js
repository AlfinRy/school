/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#043463",
        secondary: "#ba060c",
        three: "#d9a668",
      },
    },
    fontFamily: {
      Quicksand: ["Quicksand", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
