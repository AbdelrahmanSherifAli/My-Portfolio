/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "tokyo-black": "#000000",
        "tokyo-dark": "#121212",
      }
    },
  },
  plugins: [],
}
