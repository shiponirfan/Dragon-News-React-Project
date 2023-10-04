/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': 'Poppins, sans-serif'
      },
      colors:{
        'deepDark': '#403F3F',
        'lightDark': '#706F6F',
        'dragonBg': '#D72050',
        'lightBg': '#F3F3F3',
      }
    },
  },
  plugins: [require("daisyui")],
}

