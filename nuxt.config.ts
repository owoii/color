// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  pages: true,
  modules: [
    "@nuxtjs/i18n",
    "nuxt-swiper",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@vite-pwa/nuxt",
    "@nuxthq/ui",
    "@pinia/nuxt",
  ],
  imports: {
    dirs: ["./stores"],
  },
  components: [
    {
      path: "~/components/sidebars",
      prefix: "Sidebar",
    },
    {
      path: "~/components/cards",
    },
    {
      path: "~/components/buttons",
    },
    {
      path: "~/components/toolbar",
      prefix: "ToolBar",
    },
    {
      path: "~/components/common",
    },
  ],
  googleFonts: {
    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
    download: true,
  },
  pwa: {
    /* PWA options */
    registerType: "autoUpdate",
  },
  build: {
    transpile: ["gsap"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  css: ["animate.css/animate.min.css"],
});
