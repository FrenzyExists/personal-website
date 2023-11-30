// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-icon', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: true,
      Inter: [400, 700],
       'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },
  ssr: false,
  tailwindcss: {
  },
  devServer: {
    port: 8000
  },
  

})
