// craco.config.js
module.exports = {
    base: '/la-dona-gatona/',
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }