/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      fontFamily: {
        gruppo: ['"Gruppo"', 'sans-serif'],
      },
      colors:{
        customColors:{
          'lightPurple': '#8E5AD0',
          'offWhite': '#FFF0D2',
        },
      },
    },
  },
  plugins: [],
}

