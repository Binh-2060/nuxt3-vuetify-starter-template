import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  compatibilityDate: "2024-04-03",
  alias: {
    "@": resolve(__dirname, "./src"),
  },

  app: {
    head: {
      title: "Nuxt3-Starter-Template",
    },
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
