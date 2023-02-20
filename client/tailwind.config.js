/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontWeight: {
      'black': 900,
      'heavy': 800,
      'bold': 700,
      'normal': 500,
      'light': 300,
    },
    extend: {
      colors:{
        'aqua': '#00acee',
        'pink': '#e8565c',
        'greent' : '#7cb083',
        'grey' : '#f8f8f8',
      }
    },
    fontFamily:{
      avanir: ["montserrat", "sans-serif"],
      poppins: ["poppins", "sans-serif"]
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'aqua '],
  },
  plugins: [
    // require('flowbite/plugin')
],
}