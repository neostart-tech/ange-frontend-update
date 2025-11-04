// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/scss/style.scss",
    "@/assets/css/dataTables.bootstrap5.min.css",
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./assets/scss/_variables.scss";',
        },
      },
    },
  },

  app: {
    head: {
      title: "ANGE-TOGO",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", href: "/images/logo/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
          defer: true,
        },

        {
          src: "/js/dataTables.bootstrap5.min.js",
          tagPosition: "bodyClose",
          defer: "true",
        },
        {
          src: "/js/jquery.dataTables.min.js",
          tagPosition: "bodyClose",
          defer: "true",
        },
      ],
    },
  },
});
