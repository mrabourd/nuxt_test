// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/global.css'
  ],
  modules: ['@nuxt/image', '@nuxtjs/color-mode', '@nuxt/fonts'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    storageKey: 'nuxt-color-mode'
  }
})