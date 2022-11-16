module.exports = {
	content: ['index.html'],
	theme: {
		extend: {
			colors: {
				secondary: '#ffba75',
				primary: '#b91c1c',
				dark: '#0f172a',
			},
		},
		fontFamily: {
			Quicksand: ['Quicksand', 'sans-serif'],
			Poppins: ['Poppins', 'sans-serif'],
		},
	},
	plugins: [],
};
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
