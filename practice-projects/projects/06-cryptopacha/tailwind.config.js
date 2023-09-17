/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		extend: {
			colors: {
				'dark-purple': '#0f0020',
				'light-purple': '#2600f0',
				'own-pink': '#ff00f0'
			},
		},
	},
	plugins: [],
};

