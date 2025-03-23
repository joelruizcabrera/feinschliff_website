// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@nuxtjs/sitemap'
  ],
  css: ['~/assets/css/tailwind.css' ,'~/assets/css/main.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})