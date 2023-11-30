/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  plugins: [require('@tailwindcss/typography'),],
}

export const theme = {
  extend: {
    colors: {

      'neutral-50': '#5c4a5d',
      'neutral-100': '#331d35',
      'neutral-200': '#29172a',

      'neutral-1': '#081f44',
      'neutral-2': '#1e375f',
      'neutral-3': '#325285',
      'neutral-4': '#122D57',

      'accent-1': '#e59b61',
      'accent-2': '#E8AA42',
      'accent-3': '#E57C23',
      'accent-4': '#eda59e',
      'accent-5': '#e88e86',
      'accent-6': '#61e596',
      'accent-7': '#86e8e5',
      'accent-8': '#e561a6',

      'base-1': '#d8e2eb',
      'base-2': '#e5e4f1',
      'base-3': '#eae9f4',
      'base-4': '#ded5ed'
    },
    keyframes: {
      float: {
        '0%': { transform: 'translate(0,  0px)' },
        '50%': { transform: 'translate(0, 15px)' },
        '100%': { transform: 'translate(0, -0px)' }
      }
    },
    animation: {
      'based-spin': 'spin 1.7s cubic-bezier(1, -0.54, 0, 1.67) infinite',
      'float': 'float 3.35s ease-in-out infinite;'
    },
  }
}

