const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://trip-planner-b.vercel.app',
      changeOrigin: true,
    })
  );
};
