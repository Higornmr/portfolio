/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'max-w': '1200px',
      },
      colors: {
        'bg-inicial': '#FFF7AD',
        'bg-final': '#FFA9F8',
      },
      fontFamily: {
        'lato': ['"Lato"'],
      },
    },
  },
  plugins: [],
}

