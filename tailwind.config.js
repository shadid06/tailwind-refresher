/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#ff5622",
        secondary:"#2197f5",
        customColor:{
          100:"#e3f3fd",
          500:"#2196f3",
          900:"#01579b"
        }
      },
      fontFamily:{
        custom:['Arial','sans']
      },
      spacing:{
        '1':'8px',
        '2':'16px',
      },
      screens:{
        'tablet':'640px',
        'desktop':'1024px'
      }
    },
  },
  plugins: [
   
  ],
}

