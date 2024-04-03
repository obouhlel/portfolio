/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				"app-bg": "#11131F",
				"subtle-bg": "#141726",
				"ui-elt-bg": "#182449",
				"hover-ui-elt-bg": "#1D2E62",
				"active-ui-elt-bg": "#253974",
				"subtle-borders": "#304384",
				"ui-elt-border": "#3A4F97",
				"hover-ui-elt-border": "#435DB1",
				"solid-bg": "#3E63DD",
				"hover-solid-bg": "#5472E4",
				"low-contrast-text": "#9EB1FF",
				"high-contrast-text": "#D6E1FF",
			},
		},
	},
	plugins: [],
};
