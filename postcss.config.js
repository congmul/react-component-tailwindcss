// postcss.config.js
module.exports = {
    plugins: {
      // Tailwind v4 moved the PostCSS plugin to a separate package.
      // See https://tailwindcss.com/docs/installation for details.
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  };