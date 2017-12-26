'use strict';

const response = {
  error: null,
  message: 'pong'
};

const ping = (req, res) => {
  res
    .send(response);
};

module.exports = ping;
