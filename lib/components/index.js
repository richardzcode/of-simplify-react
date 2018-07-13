'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfTheme = undefined;

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

var _OfTheme = require('./OfTheme');

var _OfTheme2 = _interopRequireDefault(_OfTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.OfTheme = _OfTheme2.default;