// implement your server here
const express = require('express');
const postsRouter = require('./posts/posts-router');
const server = express();
// require your posts router and connect it here

server.use(express.json());
server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
    res.send(`
      <p>Server is alive!</p>
    `);
  });

module.exports = server;