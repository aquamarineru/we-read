/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'light': 'rgb(255, 255, 255, 0.8)',
      'bgSecondary': '#F2EFFC',
      'primary': '#7B5DDF',
      'brand': '#352763',
      'title': '#17151C',
      'text': '#7E7B8A',
      'input': '#A8A6B2',
    },
    backgroundImage: {
      'main': "url('/public/assets/bg.svg')"
    },
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}