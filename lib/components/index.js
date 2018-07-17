'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nav = require('./nav');

Object.keys(_nav).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _nav[key];
    }
  });
});