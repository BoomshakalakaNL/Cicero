const routes = require ('next-routes')();

routes
  .add('/declaraties/new', '/declaraties/new')
  .add('/declaraties/:address', '/declaraties/show');

module.exports = routes;
