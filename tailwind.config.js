module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: 	'#b91c1c',
        secondary: '#ba060c',
        three: '#d9a668',
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
