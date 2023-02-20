/**
 * DEV_SERVER_PROXY
 */
const proxyMap = {
  test: {
    '^/api/client': {
      target: 'http://8.133.181.109/',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api/client': '/brix',
      },
      // logLevel: 'debug',
    },

    '^/api/engineer': {
      target: 'http://8.133.181.109:8080/',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api/engineer': '/brix',
      },
      // logLevel: 'debug',
    },

    '^/chat': {
      target: ' http://8.133.181.109:8081/',
      ws: true,
      changeOrigin: true,
      // logLevel: 'debug',
    },
  },
  prod: {
    '^/api/client': {
      target: 'http://13.52.132.155/',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api/client': '/brix',
      },
      // logLevel: 'debug',
    },

    '^/api/engineer': {
      target: 'http://13.57.150.126/',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api/engineer': '/brix',
      },
      // logLevel: 'debug',
    },

    '^/chat': {
      target: ' http://13.57.150.126:8081/',
      ws: true,
      changeOrigin: true,
      // logLevel: 'debug',
    },
  },
};

module.exports = proxyMap;
