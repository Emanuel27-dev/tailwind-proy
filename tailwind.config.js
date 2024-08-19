/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      container: {
        screens:{
          xl: '1300px'
        }
      },
      fontFamily: {
        'sans': 'Work Sans'
      },
      colors: {
        'do-blue-dark': '#080c2d',
        'do-blue-mediumdark': '#1d274c',
        'do-blue-light': 'rgb(0,105,255)',
        'do-blue-medium': 'rgb(20,86,255)',
        'do-blue-lighter': '#f9fafe',
      },
      boxShadow: {
        'do-input': '0 6px 8px -3px gray'
      },
      width: {
        'card': '352px'
      },
      fontSize: {
        '18': '18px'
      },
      flexBasis: {
        '33%': '33%'
      },
      keyframes: {
        carrusell: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(200px)' }
        }
      },
      animation: {
        carrusell: 'carrusell 9s linear infinite alternate',
        carrusellReverse: 'carrusell 9s linear infinite alternate-reverse'
      }

    },
  },
  plugins: [],
}

