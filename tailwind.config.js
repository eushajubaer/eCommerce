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
        
      },
      colors: {
        'menuColor': '#767676',
        'menuColorH': '#262626',
        'RectangleColor': '#F5F5F3',
        'informationColor': '#6D6D6D'
      },
      width: {
        'logoW': '30%',
        'menuW': '70%',
        'rectangleW': '20%',
        'searchW': '60%',
        'searchberW': '600px'
        
      },
      backgroundImage: {
        'bannerImg': "url('./src/assets/banner_one.png')",
        
      },
     
    },
  },
  plugins: [],
}

