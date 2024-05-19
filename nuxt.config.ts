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
  devServer: {
    host: "0.0.0.0", // Listen on all network interfaces
    port: 3000, // Use any port you prefer
  },
});
