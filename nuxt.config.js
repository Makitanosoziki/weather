
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/reset.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
  ],
    /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-fontawesome',
    'nuxt-webfontloader',
    '@nuxtjs/axios'
  ],
  /*
  ** FontAwesome
  */
  fontawesome: {
    component: 'fa'
  },
  webfontloader: {
    google: {
      families:['Montserrat:wght@100','M+PLUS+1p:wght@100']
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },

          postcss: {
            // キーとしてプラグイン名を、値として引数を追加します
            // プラグインは前もって npm か yarn で dependencies としてインストールしておきます
            plugins: {
              // 値として false を渡すことによりプラグインを無効化します
              'postcss-preset-env': {
                stage: 0
              }
            },
            preset: {
              // postcss-preset-env 設定を変更します
              autoprefixer: {}
        }
      }
    }
}