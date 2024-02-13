/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['*.html', './src/assets/css/*.css'],
  theme: {
    extend: {
      spacing: {
        '2/5': '40%',
      },
    },
  },
};
