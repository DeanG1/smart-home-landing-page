/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

