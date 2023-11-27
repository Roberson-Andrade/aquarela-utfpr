/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f0f9ff',
					100: '#e0f3fe',
					200: '#bae7fd',
					300: '#7dd6fc',
					400: '#38c1f8',
					500: '#0eaae9',
					600: '#0288c7',
					700: '#036ca1',
					800: '#075c85',
					900: '#0c4c6e',
					950: '#083049',
				},
			},
		},
	},
	plugins: [],
};
