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
      'hover': '#957DE5',
      'hoverSecondary': '#CABEF2',
      'border': '#644BB6',
      'brand': '#352763',
      'title': '#17151C',
      'text': '#7E7B8A',
      'input': '#A8A6B2',
      'white': '#FFFFFF',
      'black': '#1D1A23',
      'tag-border': '#E8E8ED',
    },
    boxShadow: {
      'custom': '0px 2px 2px 0px rgba(29, 26, 35, 0.25);'
    },
    backgroundImage: {
      'main': "url('/public/assets/bg.svg')",
      "club": "url('/assets/photo.png')",
    },
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif'],
    },
    extend: {
      fill: {
        hover: '#957DE5', 
        active: '#7B5DDF', 
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
}