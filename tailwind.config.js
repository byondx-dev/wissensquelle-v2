/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Amiri', 'serif'],
      },
      colors: {
        brand: {
          teal: '#0a4f60',
          dark: '#1A1510',
        },
        gold: {
          start: '#D4AF37',
          end: '#AA8A28',
        },
      },
    },
  },
  plugins: [],
}
