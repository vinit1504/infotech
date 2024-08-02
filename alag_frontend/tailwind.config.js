/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tasaorbiterdeck: ['Tasaorbiterdeck Bold', 'sans-serif'],
      },
      colors: {
        'custom-blue': 'rgba(13, 0, 41, 0.9)',
        'purple': '#ec3838',
        'purple-50': '#f7f2fa',
        'purple-200': '#e9d8fd',
        'purple-700': '#6b46c1',
        'purple-400': '#BC7FCD',
        'purple-light': '#E9E2FF',
        'purple-100' :'#F1EAFF'
      },
      backgroundImage: {
        'notification-bar': 'linear-gradient(103deg, rgba(255, 255, 255, 0.00) 56%, #ef8888 98%), linear-gradient(63deg, #f9b5b5 23%, #ffffff 60%)',
      },
      spacing: {
        '7.75em': '7.75em',
        '3.75em': '3.75em',
      },
      borderRadius: {
        '3xl': '1.5em',
      },
      fontSize: {
        'custom': '1.1em',
      },
    },
  },
  plugins: [],
}

