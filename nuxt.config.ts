// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxt/test-utils/module'
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL,
      secretKey: process.env.NUXT_SECRET_KEY_APP_ID
    },
  }
})
