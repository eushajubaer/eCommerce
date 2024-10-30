/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'HeaderContainer': '1320px',
      },
      fontFamily: {
        'DM': ['DM Sans'],
        
      }
    },
  },
  plugins: [],
}

