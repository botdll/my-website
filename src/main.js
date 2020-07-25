// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/main.css')

import DefaultLayout from '@/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
// import VModal from 'vue-js-modal'
// import VModal from 'vue-js-modal/dist/index.nocss.js'
// import 'vue-js-modal/dist/styles.css'
// import 'vue-js-modal/dist/ssr.index'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Vue.use(VModal)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  head.meta.push({
    name: 'keywords',
    content: 'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS'
  })

  head.meta.push({
    name: 'description',
    content: 'Personal website created with Gridsome and Tailwind'
  })

  head.meta.push({
    name: 'author',
    content: 'George Tsilikas'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
  })
}