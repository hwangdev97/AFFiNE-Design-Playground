// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxt/content",
    [
      "unplugin-icons/nuxt",
      {
        /* options */
      },
    ],
  ],

  content: {
    documentDriven: true,
  },

  // extends: '@nuxt-themes/typography',
  vite: {
    plugins: [
      Components({
        resolvers: IconsResolver(),
      }),
      Icons(),
    ],
  },

  devtools: {
    enabled: true,
  },
});
