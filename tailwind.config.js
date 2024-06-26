/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    `./nuxt.config.{js,ts}`,
    "./plugins/**/*.{js,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
