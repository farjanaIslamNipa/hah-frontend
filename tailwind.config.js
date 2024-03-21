/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand' : '#0AB2A8',
        'secondary': '#26EEA0'
      }
    },
  },
  plugins: [],
}