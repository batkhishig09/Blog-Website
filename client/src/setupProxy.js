// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/server',
    createProxyMiddleware({
      target: 'http://localhost:3000',  // Point to your server
      changeOrigin: true,
    })
  );
};
