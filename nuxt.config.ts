// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
// https://github.com/nuxt/content/issues/1884
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxt/content"],
  content: {
    documentDriven: true,
  },
});
