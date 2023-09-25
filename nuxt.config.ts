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
    '@unocss/nuxt',
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
  vite: {
    plugins: [
      Components({
        resolvers: IconsResolver(),
      }),
      Icons(),
    ],
  },
  // extends: '@nuxt-themes/typography',

  runtimeConfig: {
    public: {
      FIGMA_TOKEN: process.env.FIGMA_TOKEN,
      NODE_ENV: process.env.NODE_ENV,
 
    },
  },
});
