
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        "Oswald": ['Oswald', 'sans-serif'] ,
        "lato": ['Lato', 'sans-serif'] ,
        "malayalam":['Noto Serif Malayalam', 'serif']
    }
    },
  },
  plugins: [],
}

