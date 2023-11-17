/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  plugins: [],
}

export const theme = {
  extend: {
    colors: {
      'accent-200': '#eda59e',
      'accent-100': '#e88e86',
      'secondary': '#2b4cc4',
      'success': '#169866',
      'warning': '#ae7b04',
      'error': '#fb3268',

      'neutral-50': '#5c4a5d',
      'neutral-100': '#331d35',
      'neutral-200': '#29172a',
      
      'base-100': '#e5e4f1',
      'base-150': '#ded5ed',
      'base-200': '#a4a1ce',
      'base-300': '#c5c2e0',


      

      'base-400': '#e5e4f1',
      'base-500': '#eae9f4',
      'base-600': '#efeff7',


      'dark-base-300': '#325285',
      'dark-base-400': '#1E375F',
      'dark-base-500': '#122D57',
      'dark-base-600': '#0e264c',

      'dark-accent-100': '#E57C23',
      'dark-accent-200': '#E8AA42',

      'dark-neutral-100': '#e5e4f1',



    },
    keyframes: {
      float: {
        '0%': { transform: 'translate(0,  0px)' },
        '50%':  { transform: 'translate(0, 15px)' },
        '100%':   { transform: 'translate(0, -0px)' } 
      }
    },
    animation: {
      'based-spin': 'spin 1.7s cubic-bezier(1, -0.54, 0, 1.67) infinite',
      'float': 'float 3.35s ease-in-out infinite;'
    },
  }
}

