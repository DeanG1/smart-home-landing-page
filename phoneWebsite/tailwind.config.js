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
      backgroundColor:{
        primary:"#1E5AFA",
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

