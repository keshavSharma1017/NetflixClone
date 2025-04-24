/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-black': '#141414',
        'netflix-dark': '#181818',
      },
      fontFamily: {
        sans: [
          'Netflix Sans', 
          'Helvetica Neue', 
          'Segoe UI', 
          'Roboto', 
          'system-ui', 
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
};