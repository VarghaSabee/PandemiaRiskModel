module.exports = {
  /*
  ** Headers of the page
  */

 env: {
  apiUrl: process.env.APP_URL || 'http://localhost:3000',
  appLocale: process.env.APP_LOCALE || 'gb',
},

  head: {
    title: 'Модель оцінки ризиків для безпеки муніципалітету від безпечного часу до пандемії',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/css/flag-icon.min.css' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#FF0000' },

  router: {
    middleware: ['locale'],
},


plugins: [
    // '~components/global',
    '~plugins/i18n',
    '~plugins/axios',
],

modules: [
  '@nuxtjs/router',
  ['@nuxtjs/axios', {baseURL: process.env.APP_URL}],
  '@nuxtjs/vuetify',
],



  // Vuetify options
  vuetify: {
    //  theme: { }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

