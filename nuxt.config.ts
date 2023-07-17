// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/svg"],
  css: ['~/assets/css/main.css'],
  svg: {
    vueSvgLoader: {
        // vue-svg-loader options
    },
    svgSpriteLoader: {
        // svg-sprite-loader options
    },
    fileLoader: {
        // file-loader options
    }
},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
})
