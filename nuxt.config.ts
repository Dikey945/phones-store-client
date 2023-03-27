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
  ],
  plugins: [
    { src: '~/plugins/font-awesome.ts' },
  ],
  loading: {
    color: 'green',
    height: '5px',
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.API_ENDPOINT || 'http://localhost:4001/graphql'
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
    ],
  }
})
