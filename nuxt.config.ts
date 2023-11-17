// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-icon'],
  ssr: false,
  tailwindcss: {

  }
})
