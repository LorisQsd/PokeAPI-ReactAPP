/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      bree: ['Bree Serif', 'sans-serif'],
    },
    extend: {
      colors: {
        'v-red-100': '#c14040',
        'v-red-200': '#982c2c',
      },
      boxShadow: {
        '3xl': '0 3px 10px rgba(0, 0, 0, 0.50)',
      },
    },
  },
  plugins: [],
};
