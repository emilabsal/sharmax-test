import colors from 'tailwindcss/colors'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  tailwindcss: {
    viewer: true,
    cssPath: '~/assets/css/main.css',
    config: {
      theme: {
        extend: {
          colors: {
            title: '#1D1D1D',
            text: 'rgba(37,37,37,.8)',
            divider: 'rgba(10, 10, 10, .3)',
            block: '#F6F6F6'
          },
          fontFamily: {
            title: ['SF Pro Text', 'sans-serif'],
            header: ['SF Pro Text', 'sans-serif'],
            text: ['Helvetica Neue', 'sans-serif']
          },
          fontSize: {
            header: '30px',
            headerSm: '22px',
            title: '22px',
            titleSm: '16px',
            textSm: '14px',
            text: '18px'
          },
          lineHeight: {
            header: '140%',
            title: '140%',
            text: '140%'
          },
          gridAutoRows: {
            layout: '526px 344px'
          }
        }
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@vueuse/nuxt']
})