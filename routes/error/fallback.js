'use strict';

const fallback = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({
      error: err.message || 'Failed to process request',
      message: null
    });
};

module.exports = fallback;
