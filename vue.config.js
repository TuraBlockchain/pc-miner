const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },
  devServer: {
    proxy: {
      '/apis': {
        target: 'http://mainnet.peth.world:6876/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/apis': '',
        }
      },
    }
  }
})
