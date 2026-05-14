/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFCF8',
          100: '#FAF7F0',
          200: '#F5E6D3',
          400: '#C5B398',
          500: '#AF9B7D',
          600: '#917D5F',
        },
        primary: '#1A1A1A',
        beige: {
          50: '#FAF7F0',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        luxury: '0.5em',
      },
    },
  },
  plugins: [],
}
