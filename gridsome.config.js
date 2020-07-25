// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')

const postcssPlugins = [
	tailwind(),
]

module.exports = {
  siteName: 'George Tsilikas | My Website',
  siteUrl: 'www.tsilikas.xyz',
  siteDescription: 'A portfolio-personal website made with Gridsome and TailwindCSS',
  plugins: [
    {
      use: 'gridsome-plugin-modal'
    }
  ],
  css: {
      loaderOptions: {
          postcss: {
              plugins: postcssPlugins,
          },
      },
  }
}
