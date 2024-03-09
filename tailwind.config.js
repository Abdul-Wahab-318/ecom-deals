/** @type {import('tailwindcss').Config} */
module.exports = {
  important : true ,
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#080808',
      'white': '#FFFFFF',
      'yellow': '#ffbc14',
      'yellow-light' : 'rgb(255, 242, 224)' ,
      'text-contrast': '#947107',
      'text': "#1B1B1B",
      'text-light': '#5E5E5E'
    },
    extend: {}, // If you want to extend the default theme
  },
  plugins: [],
};
