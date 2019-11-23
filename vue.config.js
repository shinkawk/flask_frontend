module.exports = {
    chainWebpack: (config) => {
        config.resolve.symlinks(false)
    },
    devServer: {
      proxy: {
        '/api/': {
          target: 'http://localhost:5000'
        }
      }
    }
  }
