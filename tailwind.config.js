/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas_neue: ['Bebas Neue', 'sans-serif'], // Add your custom font here
        montserrat: ['Montserrat', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [require('daisyui'),],
}

