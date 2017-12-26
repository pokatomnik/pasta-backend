'use strict';

const express = require('express');

class Application {
  constructor(mongoUri, port) {
    this._mongoUri = mongoUri;
    this._port = port;
    this._express = express();
  }

  express(fn) {
    fn(this._express);
    return this;
  }

  port(fn) {
    fn(this._port);
    return this;
  }

  mongoUri(fn) {
    fn(this._mongoUri);
    return this;
  }

  bootstrap() {
    this._express
      .listen(this._port);
    return this;
  }
}

module.exports = Application;
