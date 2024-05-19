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
        {
          name: "keywords",
          content:
            "Frontend Developer, Web Developer, UI/UX Designer, JavaScript Developer, HTML, HTML5, CSS, CSS3, Tailwind CSS, Bootstrap, Responsive Web Design, Mobile-First Design, Web Development Portfolio, JavaScript, Vue.js Developer, Vue.js, Nuxt.js, TypeScript, Frontend Engineer, Web Design, CSS Animations, HTML5 Canvas, CSS Grid, CSS Flexbox, Sass, SCSS, LESS, Bootstrap Developer, Tailwind CSS Expert, Server-Side Rendering, Static Site Generation, Progressive Web Apps, Single Page Applications, Cross-Browser Compatibility, Web Performance Optimization, Web Accessibility, Git, GitHub, Version Control, API Integration, RESTful APIs, JSON, AJAX, Webpack, Babel, NPM, Yarn, Node.js, WebSockets, Firebase, AWS, Azure, Netlify, Vercel, Contentful, Sanity.io, Headless CMS, Jamstack, Web Animations, GSAP, Anime.js, Figma, Adobe XD, Sketch, Prototyping, Wireframing, User Research, User Testing, A/B Testing, SEO, Search Engine Optimization, Web Analytics, Google Analytics, Web Development Tools, Code Editors, VS Code, Sublime Text, Atom, Emmet, Prettier, ESLint, Testing Frameworks, Jest, Mocha, Chai, Cypress, Unit Testing, Integration Testing, End-to-End Testing, Continuous Integration, Continuous Deployment, CI/CD, DevOps, Agile Methodology, Scrum, Kanban, Project Management, Jira, Trello, Asana, Collaboration Tools, Slack, Microsoft Teams, Portfolio Website, Personal Website, Frontend Projects, Web Security, Website Security, Performance Optimization, Web Performance, Web Development Skills, Coding Skills, HTML Coding, CSS Coding, JavaScript Coding, Python Developer, Python, Web Animation, Interactive Websites, Modern Web Design, Clean Code, Scalable Code, Efficient Code, Best Practices, Coding Standards, Code Review, Code Optimization, Debugging, Troubleshooting, Problem Solving, Critical Thinking, Analytical Skills, Technical Skills, Professional Skills, Communication Skills, Teamwork, Collaboration, Project Management, Time Management, Client Communication, User Experience, User Interface, UI Design, UX Design, Design Principles, Design Patterns, Accessibility Standards, Cross-Device Compatibility, Cross-Platform Development, Browser Testing, Mobile Development, Tablet Development, Desktop Development, Web Standards, W3C Standards, HTML Semantics, CSS Preprocessors, CSS Frameworks, JavaScript Frameworks, JavaScript Libraries, Vue Router, Vuex, Vue CLI, Composition API, Frontend Frameworks, Static Websites, Dynamic Websites, Single Page Applications (SPAs), Multi-Page Applications (MPAs), Progressive Enhancement, Graceful Degradation, Web Components, Shadow DOM, Custom Elements, HTML Templates, CSS Variables, CSS Modules, CSS-in-JS, Responsive Images, Retina Images, SVG Graphics, Icon Fonts, Web Fonts, Font Optimization, Image Optimization, Asset Management, Dependency Management, Package Managers, Build Tools, Task Runners, Animation, Version Control, Web Security, Website Performance, Cross-Browser Testing, Performance Optimization, User Interface Design, User Experience Design, Semantic HTML, Modern JavaScript, ES6, ES7, ES8, ECMAScript, Vanilla JavaScript, Interactive UI, Dynamic Content, AJAX Requests, REST API, Fetch API, Axios, Web Components, Custom Elements, Shadow DOM, HTML Templates, CSS Variables, CSS Modules, CSS-in-JS, Styled Components, Emotion, CSS Frameworks, UI Libraries, Design Systems, Atomic Design, Component-Based Design, Reusable Components, State Management, Vuex, Pinia, Composition API, Nuxt.js Server-Side Rendering, Nuxt.js Static Site Generation, Jamstack Architecture, Headless CMS Integration, Progressive Web Applications, Offline First, Service Workers, IndexedDB, Web Storage, Web Workers, Web Assembly, API Fetching, HTTP Requests, JSON Parsing, JSONP, Web Animations API, SVG Animations, Canvas Animations, Three.js, D3.js, Chart.js, Frontend Performance, Lazy Loading, Code Splitting, Tree Shaking, Asset Minification, Image Compression, Critical CSS, Render Blocking, First Contentful Paint, Time to Interactive, Lighthouse Audits, PageSpeed Insights, Core Web Vitals, Frontend Testing, Unit Testing with Jest, Vue Test Utils, Cypress End-to-End Testing, CI/CD Pipelines, Git Workflows, Pull Requests, Code Reviews, Pair Programming, GitHub Actions, GitLab CI, Travis CI, CircleCI, Docker, Docker Compose, Kubernetes, Containerization, Cloud Deployment, Serverless Architecture, AWS Lambda, Azure Functions, Netlify Functions, Vercel Deployments, Cloudflare, S3 Buckets, Cloud Storage, CDN, Content Delivery Network, Automated Deployment, Web Security Best Practices, HTTPS, SSL Certificates, Content Security Policy, CORS, Cross-Origin Resource Sharing, OWASP, Secure Coding, Input Validation, Sanitization, Authentication, Authorization, OAuth, JWT, JSON Web Tokens, Session Management, Encryption, Data Privacy, GDPR, Cookie Management, SameSite Cookies, Frontend Conferences, Frontend Meetups, Open Source Contribution",
        },
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
