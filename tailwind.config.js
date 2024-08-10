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
        habibi: ['"Habibi"', 'serif'],
        electrolize: ['"Electrolize"', 'sans-serif'],
        fira: ['"Fira Sans"', 'sans-serif'],
      },
      colors:{
        customColors:{
          'lightPurple': '#8E5AD0',
          'radialPurpleL': '#C8ACD6',
          'radialPurpleD': '#694F8E',
          'offWhite': '#FFF0D2',
          'offWhiteDark':'#FFF2C3',
        },
      },
    },
  },
  plugins: [],
}

