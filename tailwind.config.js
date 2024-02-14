/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['*.html', './src/assets/css/*.css', './js/*.js'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#333',
        'steel-blue': 'steelblue',
        'light-sky-blue': 'lightskyblue',
        'bright-blue': '#1a78ba',
      },
      spacing: {
        '2/5': '40%',
      },
    },
  },
};
