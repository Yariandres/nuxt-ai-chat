// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/mdc'],
  runtimeConfig: {
    NUXT_OPENAI_API_KEY: process.env.NUXT_OPENAI_API_KEY,
  },
});