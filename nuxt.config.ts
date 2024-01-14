// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  // css: [
  //     '~/assets/css/tailwind.css'
  // ],
  // Defaults options
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },

  // app: {
  //   pageTransition: {
  //     name: 'page',
  //     mode: 'out-in'
  //   }
  // },

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  googleFonts: {
    families: {
      // Roboto: true,
      // 'Josefin+Sans': true,
      // Lato: [100, 300],
      Poppins: {
        wght: [400, 500, 700],
      },
    }
  },

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/device',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    'nuxt3-aos',
    'nuxt-swiper',
    'nuxt-headlessui',
    'nuxt-particles',
    '@hypernym/nuxt-gsap'
  ],

  particles: {
    mode: 'full', // 'full' | 'slim' | 'basic' | 'custom'
    lazy: true
  },

  // anime: {
  //   provide: true
  // },

  ui: {
    global: true,
    icons: ['fluent', 'simple-icons']
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },

})
