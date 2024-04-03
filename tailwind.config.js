/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-mode-bg': '#3F4045',
        'light-mode-bg': '#DADFF7',
        'dark-mode-text': '#DADFF7',
        'light-mode-text': '#3F4045',
        'box-color': '#FFFFFF',
        'btn-color': '#355691',
        'btn-color-hover': '#5376b5',
        'title-color': '#1d3557',
        'subtitle-color': '#457b9d',
      },
    },
  },
  plugins: [],
}