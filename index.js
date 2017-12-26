'use strict';

const Application = require('./application/Application');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/config');
const error404 = require('./routes/error/error404');
const fallback = require('./routes/error/fallback');
const index = require('./routes/static/index');
const logger = require('morgan');
const ping = require('./routes/static/ping');

const application = new Application(config.mongoUri, config.port);

application
  /* define middlewares */
  .express((express) => {
    express
      .use(logger('dev'))
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: false
      }))
      .use(cookieParser());
  })

  /* define routes */
  .express((express) => {
    express
      .use('/', index)
      .use('/ping', ping);
  })

  /* Handle errors */
  .express((express) => {
    express
      .use(error404)
      .use(fallback);
  })
  .bootstrap();
