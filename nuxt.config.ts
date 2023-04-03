// https://nuxt.com/docs/api/configuration/nuxt-config

import graphql from "@rollup/plugin-graphql";

export default defineNuxtConfig({
  runtimeConfig: undefined,
  ssr: true,
  head: {
    link: [
      {rel:"preconnect", href:"https://fonts.googleapis.com"},
      {rel:"preconnect", href:"https://fonts.gstatic.com", crossOrigin:"true"},
      {href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap", rel:"stylesheet"}
    ],
  },
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    ['nuxt-swiper',{
      css: true,
      modules: ['pagination', 'navigation'],
      }
    ],
    '@nuxtjs/apollo',
    '@vueuse/nuxt'
  ],
  plugins: [
    { src: '~/plugins/font-awesome.ts' },
  ],
  loading: {
    color: 'green',
    height: '5px',
  },
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.API_ENDPOINT || 'https://comments-db.herokuapp.com/graphql'
      }
    },
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: [
      '@apollo/client',
      'ts-invariant/process',
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  }
})
