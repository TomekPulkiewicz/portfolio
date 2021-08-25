module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/portfolio/'
  : '/',
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "@/scss/_variables.scss";`,
        },
      },
    },
  }


  