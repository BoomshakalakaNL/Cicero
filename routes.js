const routes = require ('next-routes')();

routes
  .add('/declaraties/new', '/declaraties/new')
  .add('/declaraties/:address', '/declaraties/show')
  .add('/declaraties/:address/edit', '/declaraties/test');

module.exports = routes;
