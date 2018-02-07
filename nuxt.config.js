const { resolve } = require('path')
const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      resolve(__dirname, 'assets/scss/*')
    ]
  }
}

function isVueRule (rule) {
  return rule.test.toString() === '/\\.vue$/'
}

function isSASSRule (rule) {
  return ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1
}

module.exports = {
  /*
  ** Headers of the page
  */
  css: [
    { src: '~assets/scss/colors.scss', lang: 'scss' }
  ],
  head: {
    title: 'astex-doors',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'astex doors' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/flickity@2/dist/flickity.css' }
    ],
    script: [
      {src: 'https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js'},
      {src: 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fa1212' },
  // loading: '~/components/loading.vue',
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
      };
      config.module.rules.forEach((rule) => {
        if (isVueRule(rule)) {
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
        }
        if (isSASSRule(rule)) {
          rule.use.push(sassResourcesLoader)
        }
      })
    }
  },
  plugins: [
    '~plugins/maps.js'
  ]
}
