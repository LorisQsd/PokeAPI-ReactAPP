/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'v-red-100': '#c14040',
        'v-red-200': '#982c2c',
      },
    },
  },
  plugins: [],
};
