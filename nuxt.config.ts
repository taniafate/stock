// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  ssr: false,
  modules: ['nuxt-svgo', ['@nuxtjs/google-fonts', {
    families: {
      Rubik: [400, 500],
    }
  }], '@pinia/nuxt'],
  svgo: {
    componentPrefix: 'i',
  },
})