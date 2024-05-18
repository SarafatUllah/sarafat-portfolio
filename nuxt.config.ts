// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ["~/components"],
  },
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt"],
});
