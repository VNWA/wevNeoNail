// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true,
  compatibilityDate: '2024-04-03',
 
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: [
    '@nuxt/icon',
    '@nuxtjs/seo',
    '@nuxt/image',
    'nuxt-swiper',
    '@nuxtjs/tailwindcss',
  ],
  site: {
    url: 'http://localhost:3000',
    name: 'Awesome Site',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  
}
)