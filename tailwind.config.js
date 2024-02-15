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
        '25': '100px',
        '18.75': '75px',
      },
      backgroundImage: {
        'rayure-blue': 'url(../images/rayure_blue.jpg)',
        'simple-blue': 'url(../images/simple_blue.jpg)',
      },
    },
  },
};
