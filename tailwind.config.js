/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       sans: ['Athletics', 'sans-serif']
      },
      colors: {
        background: '#EDEDED',
        text: '#333333',
        primary: '#302815',
        secondary: '#cbcbcb',
        accent: '#6c3a10',
      
        whatsapp: '#25D366',
        instagram: '#C13584',
      },
    },
  },
  plugins: [],
}

