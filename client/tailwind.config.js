/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0a174e',
          dark: '#050d26',
        },
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#A98913',
        },
      },
    },
  },
  plugins: [],
};
