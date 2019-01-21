module.exports = {
    css: {
        // extract: true,
        // modules: false,
        // localIdentName: '[name]_[local]_[hash:base64:5]',
        // sourceMap: false,
        // loaderOptions: {}
    },

    // whether to use eslint-loader
    lintOnSave: true,

    devServer: {
        /*
          open: process.platform === 'darwin',
          host: '0.0.0.0',
          port: 8080,
          https: false,
          hotOnly: false,
          proxy: null, // string | Object
          before: app => {}
        */
    },
    productionSourceMap: !process.env.VUE_CLI_TEST,
}