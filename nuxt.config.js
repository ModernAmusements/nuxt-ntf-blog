import postcssPresetEnv from 'postcss-preset-env'
import postcssEasingGradients from 'postcss-easing-gradients'
import * as SITE_INFO from './content/site/info.json'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'

export default {
  target: 'static',
  components: true,
  ssr: false,
  generate: {
    fallback: true,
  },
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'http://createADotEnvFileAndSetURL'
        : 'http://localhost:3000',
    lang: SITE_INFO.sitelang || 'en-EN',
  },
  head: {
    title: 'ModernAmusement by Shady Tawfik',
    manifest: { name: 'ModernAmusement by Shady Tawfik', lang: 'en-EN' },
    meta: [
      { property: 'og:site_name', content: 'ModernAmusement by Shady Tawfik' },
      { name: 'og-type', property: 'og:type', content: 'ModernAmusement by Shady Tawfik' },
      {
        name: 'og:image',
        property: 'og:image',
        content: 'https://modern-amusements.dev/static/preview-meta.jpg',
      },
      {
        name: 'image',
        property: 'image',
        content: 'https://modern-amusements.dev/static/preview-meta.jpg',
      },
      // Twitter
      { name: 'twitter:site', content: '@nathan_tawfik' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:url',
        name: 'twitter:url',
        content: 'https://twitter.com/nathan_tawfik',
      },
      {
        name: 'twitter:title',
        name: 'twitter:title',
        content: 'ModernAmusement by Shady Tawfik',
      },
      {
        name: 'twitter:description',
        name: 'twitter:description',
        content: 'Sharing skills in the area of web development.',
      },
      {
        name: 'twitter:image',
        name: 'twitter:image',
        content: 'https://modern-amusements.dev/static/preview-meta.jpg',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#526488' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.pcss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-content-placeholders.js', '~/plugins/fontawesome.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxtjs/svg', '@nuxtjs/pwa'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', 'nuxt-purgecss'],
  /*
   ** Build configuration
   */

  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-preset-env': postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': false,
          },
        }),
        'postcss-easing-gradients': postcssEasingGradients,
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  /*
   ** Custom additions configuration
   */
  // ? The content property: https://content.nuxtjs.org/configuration
  content: {
    dir: 'content',
  },
  tailwindcss: {
    viewer: false, // disabled because it causes `Error: Cannot find module 'tailwindcss/resolveConfig'`, fixed in https://github.com/nuxt-community/tailwindcss-module/pull/303
    cssPath: '~/assets/css/main.pcss',
    exposeConfig: false, // enables `import { theme } from '~tailwind.config'`
  },
  purgeCSS: {
    mode: 'postcss',
    // ? Safelisting docs: https://purgecss.com/safelisting.html
    safelist: {
      // standard: [],
      deep: [/dark/, /light/, /btn/, /icon/, /main/],
      greedy: [/^card/, /image$/, /title$/, /^nuxt-content/, /code/, /pre/, /token/, /^vue-content-placeholders/],
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'light', // default value of $colorMode.preference
    fallback: COLOR_MODE_FALLBACK, // fallback value if not system preference found
    componentName: 'ColorScheme',
    cookie: {
      options: {
        sameSite: 'lax',
      },
    },
  },
  pwa: {
    icon: {
      source: 'static/preview.png',
      filename: 'preview',
    },
    manifest: { name: 'ModernAmusement by Shady Tawfik', lang: 'en-EN' },
    meta: [
      { property: 'og:site_name', content: 'ModernAmusement by Shady Tawfik' },
      { name: 'og-type', property: 'og:type', content: 'ModernAmusement by Shady Tawfik' },
      {
        name: 'og:image',
        property: 'og:image',
        content: 'https://modern-amusements.dev/static/preview-meta.jpg',
      },
      {
        name: 'image',
        property: 'image',
        content: 'https://modern-amusements.dev/static/preview-meta.jpg',
      },
      // Twitter
      { name: 'twitter:site', content: '@nathan_tawfik' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:url',
        name: 'twitter:url',
        content: 'https://twitter.com/nathan_tawfik',
      },
      {
        name: 'twitter:title',
        name: 'twitter:title',
        content: 'ModernAmusement by Shady Tawfik',
      },
      {
        name: 'twitter:description',
        name: 'twitter:description',
        content: 'Sharing skills in the area of web development.',
      },
      {
        name: 'twitter:image',
        name: 'twitter:image',
        content: 'https://modern-amusements.dev/static/preview-meta.jpg',
      },
    ],
  },
}
