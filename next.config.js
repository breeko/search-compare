const withSourceMaps = require('@zeit/next-source-maps')
module.exports = withSourceMaps({
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty',
          net: 'empty',
          tls: 'empty',
          dns: 'empty',
        }
      }
  
      return config
    }
  })