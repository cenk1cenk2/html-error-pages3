export default {
  server: {
    host: '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kilic.dev - error',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This site has encountered an unexpected error.'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  tailwindcss: {
    jit: true
  },

  colorMode: {
    classSuffix: ''
  },

  target: 'server',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '@/assets/css/main.css' ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [ '@/components', '@/components/partial', { path: '@/components/app', prefix: 'App' } ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [ '@nuxt/typescript-build', '@nuxtjs/composition-api/module', '@nuxtjs/stylelint-module', '@nuxtjs/tailwindcss', '@nuxtjs/fontawesome', '@nuxtjs/color-mode' ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [ ({ isDev }) => !isDev && /@vue[\\/]composition-api/ ],
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  }
}
