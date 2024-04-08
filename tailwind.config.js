/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				dark: {
					'app-bg': '#11131F',
					'subtle-bg': '#141726',
					'ui-elt-bg': '#182449',
					'hover-ui-elt-bg': '#1D2E62',
					'active-ui-elt-bg': '#253974',
					'subtle-borders': '#304384',
					'ui-elt-border': '#3A4F97',
					'hover-ui-elt-border': '#435DB1',
					'solid-bg': '#3E63DD',
					'hover-solid-bg': '#5472E4',
					'low-contrast-text': '#9EB1FF',
					'high-contrast-text': '#D6E1FF',
				},
				light: {
					'app-bg': '#FDFDFE',
					'subtle-bg': '#F7F9FF',
					'ui-elt-bg': '#E6F4FE',
					'hover-ui-elt-bg': '#D5EFFF',
					'active-ui-elt-bg': '#D2DEFF',
					'subtle-borders': '#C1D0FF',
					'ui-elt-border': '#ABBDF9',
					'hover-ui-elt-border': '#8DA4EF',
					'solid-bg': '#3E63DD',
					'hover-solid-bg': '#3358D4',
					'low-contrast-text': '#3A5BC7',
					'high-contrast-text': '#1F2D5C',
				},
			},
			keyframes: {
				drop: {
					'0%': { transform: 'translateY(-100%)', opacity: '0'},
					'100%': { transform: 'translateY(0)', opacity: '1'},
				},
			},
			animation: {
				drop: 'drop 0.5s ease-in-out',
			},
		},
	},
	plugins: [],
};
