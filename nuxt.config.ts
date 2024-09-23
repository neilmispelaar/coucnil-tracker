// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: '2024-04-03',

  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: {
    compatibilityVersion: 4,
  },

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // https://ui.nuxt.com/getting-started/theming#dark-mode
  colorMode: {
    preference: 'light',
  },

  // https://content.nuxt.com/get-started/installation
  content: {
    // ... options
  },

  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/content'],
});
