/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0px 20px 5px rgba(0, 0, 0, 0.17)',
      },
      borderColor:{
        'primary': "#333333"
      },
      backgroundColor:{
        primary:"#1E5AFA",
        secondary:"#333333",
        btn_background:"#000F37"
      },
      textColor:{
        primary:"#575757",
        secondary:"#313131"
      },
      fontSize:{
        'xl7-1/2': '5.8rem'
      },
      fontFamily:{
        'sora': ['Sora', 'sans-serif'],
        'code': ['Source Code Pro', 'monospace'],
        'grotesk': ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

