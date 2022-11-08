const express = require('express');

const emptyRouter = express.Router();

emptyRouter.get('/', (req, res) => {
  res.redirect('/');
});

module.exports = emptyRouter;