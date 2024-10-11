// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@primevue/nuxt-module'],
  devtools: { enabled: true },
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
