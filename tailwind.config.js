import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
	theme: {},
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						background: '#ffffff',
						foreground: '#11181c',
						focus: '#7828c8',
						primary: {
							50: '#E6F1FE',
							100: '#CCE3FD',
							200: '#99C7FB',
							300: '#66AAF9',
							400: '#338EF7',
							500: '#006FEE',
							600: '#005BC4',
							700: '#004493',
							800: '#002E62',
							900: '#001731',
							DEFAULT: '#006FEE',
						},
						error: '#F31260',
						warning: '#F5A524',
						success: '#17C964',
					},
				},
			},
		}),
	],
};
