const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://louie-03.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    }),
  );
  app.use(
    'https://d3ew6nkgwjgkva.cloudfront.net/api',
    createProxyMiddleware({
      target: 'http://louie-03.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    }),
  );
};
