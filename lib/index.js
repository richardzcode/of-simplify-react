'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = require('./components');

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});

var _Icons = require('office-ui-fabric-react/lib/Icons');

var OfSimplify = {
  initializeIcons: _Icons.initializeIcons
};

exports.default = OfSimplify;