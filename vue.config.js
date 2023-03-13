/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const proxyConfig = require('./proxy.config.js');

module.exports = {
  productionSourceMap: false,
  publicPath: '/',
  assetsDir: 'client',
  outputDir: 'dist',
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8899,
    hot: true,
    disableHostCheck: true,
    proxy: proxyConfig[process.env.DEV_SERVER_PROXY || 'test']
  },
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // modifyVars: {
          //   'primary-color': '#1DA57A',
          //   'link-color': '#1DA57A',
          //   'border-radius-base': '2px',
          // },
          javascriptEnabled: true,
        },
      },
    },
  },

  configureWebpack: config => {
    config.externals = {
    }
    // config.devtool = 'cheap-eval-source-map';
    config.optimization.minimizer = [];



    config.resolve = {
      extensions:['.js', '.vue', '.json'],
      alias: {
        'vue':'vue/dist/vue.common.js',
        '@': path.resolve(__dirname,'src')
      }
    }


    // config.plugins.push(new webpack.IgnorePlugin({
    //   resourceRegExp: /^\.\/locale$/,
    //   contextRegExp: /moment$/
    // }));
  },
  transpileDependencies: [
    // /[/\\]node_modules[/\\]test[/\\]/,
      /[/\\]node_modules[/\\][@\\]openzeppelin[/\\]/,
  ],

  chainWebpack: config => {
    // 移除 prefetch 插件
    // config.plugins.delete('prefetch-index');
    // config.plugins.delete('prefetch-index');
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use("i18n")
        .loader("@kazupon/vue-i18n-loader")
        .end();

      // config.module
      //   .rule('vue')
      //   .use('vue-loader')
      //     .tap(options => {
      //       console.log(options)
      //       // modify the options...
      //       return options
      //     })
  }
}
