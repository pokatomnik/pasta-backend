const express = require('express');
const index = require('../../controllers/static/index');
const router = express.Router();

router
  .get('/', index);

module.exports = router;
