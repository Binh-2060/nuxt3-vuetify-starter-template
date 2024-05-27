// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Nuxt3-Starter-Template",
    },
  },

  devServer: {
    port: 3001,
    host: "0.0.0.0",
  },

  components: [
    {
      path: "@/components",
      pathPrefix: false,
    },
  ],

  css: ["~/assets/css/style.scss"],

  build: {
    transpile: ["vuetify"],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "dayjs-nuxt",
    "nuxt-lodash",
    //...
  ],

  dayjs: {
    locales: ["en", "lo"],
    plugins: ["relativeTime", "utc", "timezone"],
    defaultLocale: "en",
    defaultTimezone: "Asia/Bangkok",
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  imports: {
    dirs: ["./stores"],
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },
});
