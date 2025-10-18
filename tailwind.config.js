/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        roboto: ['"Roboto Condensed"', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        // Add your custom fonts here as well
        papyrus: ['Papyrus', 'serif'],
        bodoni: ['Bodoni', 'serif'],
        imprisha: ['Imprisha', 'serif'],
        itcblackadder: ['ITCBlackadder', 'serif'],
      },
    },
  },
  plugins: [],
}