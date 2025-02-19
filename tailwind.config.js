/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'text': {
          50: '#f8edf0',
          100: '#f1dae1',
          200: '#e3b5c2',
          300: '#d590a4',
          400: '#c76b85',
          500: '#b94667',
          600: '#943852',
          700: '#6f2a3e',
          800: '#4a1c29',
          900: '#250e15',
          950: '#12070a',
        },
        'background': {
          50: '#f9ecef',
          100: '#f2d9df',
          200: '#e6b3bf',
          300: '#d98c9f',
          400: '#cc667f',
          500: '#bf4060',
          600: '#99334c',
          700: '#732639',
          800: '#4d1926',
          900: '#260d13',
          950: '#13060a',
        },
        'primary': {
          50: '#fbeaee',
          100: '#f6d5de',
          200: '#edabbd',
          300: '#e4819b',
          400: '#db577a',
          500: '#d22d59',
          600: '#a82447',
          700: '#7e1b35',
          800: '#541224',
          900: '#2a0912',
          950: '#150409',
        },
        'secondary': {
          50: '#fce9ee',
          100: '#f9d2dc',
          200: '#f3a5ba',
          300: '#ed7897',
          400: '#e74b75',
          500: '#e01f52',
          600: '#b41842',
          700: '#871231',
          800: '#5a0c21',
          900: '#2d0610',
          950: '#160308',
        },
        'accent': {
          50: '#fde7ed',
          100: '#fbd0db',
          200: '#f8a0b8',
          300: '#f47194',
          400: '#f14170',
          500: '#ed124c',
          600: '#be0e3d',
          700: '#8e0b2e',
          800: '#5f071f',
          900: '#2f040f',
          950: '#180208',
        },
       },
       
       

       


    
    }
  },
  plugins: []
};

