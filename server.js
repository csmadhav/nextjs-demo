const next = require('next');

const routes = require('./routes');

const app = next({ dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);

const express = require('express');

app.prepare().then(() => {
  let server = express();
  server.get('/example-route', () => {
    return {
      example:'response'
    }
  })
  express().use(handler).listen(3000, '0.0.0.0');
});