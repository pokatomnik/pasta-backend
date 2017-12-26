'use strict';

const config = require('../../config/config');

const indexJson = {
  error: null,
  message: `This is index page for Pasta backend. You may read API documentation here: ${config.helpUrl}`
};

const index = (req, res) => {
  res
    .json(indexJson);
};

module.exports = index;
