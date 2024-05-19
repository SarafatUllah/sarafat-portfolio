// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Sarafat Ayon",
      titleTemplate: "%s | Portfolio",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "keywords", content: process.env.META_KEYWORDS },
        {
          name: "description",
          content: `Hi there! I'm a Frontend Web Developer with over 3+ years of
            experience in crafting sleek, responsive web applications. I
            specialize in HTML, CSS and JavaScript, and I'm skilled in Vue.js
            and Nuxt.js for creating dynamic, high-performance sites.
            Experienced in building scalable and performant web applications.
            Strong problem-solving abilities and a passion for clean and
            efficient code. Committed to delivering exceptional user
            experiences.`,
        },
        {
          key: "og:title",
          property: "og:title",
          content: "Sarafat Ayon Portfolio",
        },
        {
          key: "og:description",
          property: "og:description",
          content: `Hi there! I'm a Frontend Web Developer with over 3+ years of
          experience in crafting sleek, responsive web applications. I
          specialize in HTML, CSS and JavaScript, and I'm skilled in Vue.js
          and Nuxt.js for creating dynamic, high-performance sites.
          Experienced in building scalable and performant web applications.
          Strong problem-solving abilities and a passion for clean and
          efficient code. Committed to delivering exceptional user
          experiences.`,
        },
        {
          key: "og:url",
          property: "og:url",
          content: "https://sarafat-portfolio.vercel.app/",
        },
        // Twitter Card meta tags
        {
          key: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        { key: "twitter:site", name: "twitter:site", content: "@sarafatayon" },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "Sarafat Ayon Portfolio",
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: `Hi there! I'm a Frontend Web Developer with over 3+ years of
        experience in crafting sleek, responsive web applications. I
        specialize in HTML, CSS and JavaScript, and I'm skilled in Vue.js
        and Nuxt.js for creating dynamic, high-performance sites.
        Experienced in building scalable and performant web applications.
        Strong problem-solving abilities and a passion for clean and
        efficient code. Committed to delivering exceptional user
        experiences.`,
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: "/seo.png",
        },
        { "http-equiv": "cache-control", content: "no-cache" },
        { "http-equiv": "expires", content: "0" },
        { "http-equiv": "pragma", content: "no-cache" },
        {
          hid: "og:image",
          property: "og:image",
          content: "/seo.png",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://sarafat-portfolio.vercel.app/",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
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
  modules: ["@pinia/nuxt", "@nuxtjs/robots", "@nuxtjs/sitemap"],
  site: {
    url: "https://sarafat-portfolio.vercel.app/",
  },

  sitemap: {
    xslColumns: [
      { label: "URL", width: "50%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
    ],
    xslTips: false,
    // include all URLs that start with /public
    include: ["/"],
  },
  routeRules: {
    // modify the sitemap.xml entry for specific URLs
    "/": {
      sitemap: { lastmod: "2024-05-19T00:00:00+00:00", priority: 1.0 },
    },
  },
  devServer: {
    host: "0.0.0.0", // Listen on all network interfaces
    port: 3000, // Use any port you prefer
  },
});
