module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        themeColorMain: '#1AA8DB',
        themeColorSecondary: '#D23838',
      }
    },
  },
  variants: {},
  plugins: [],
}
