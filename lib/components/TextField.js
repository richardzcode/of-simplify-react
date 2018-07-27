'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField2 = require('office-ui-fabric-react/lib/TextField');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextField = function (_React$Component) {
  _inherits(TextField, _React$Component);

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.handleRenderPrefix = _this.handleRenderPrefix.bind(_this);
    return _this;
  }

  _createClass(TextField, [{
    key: 'handleRenderPrefix',
    value: function handleRenderPrefix(props) {
      var prefix = props.prefix;
      var _props = this.props,
          style = _props.style,
          onRenderPrefix = _props.onRenderPrefix;

      var prefixStyle = style ? style.prefix : null;

      return _react2.default.createElement(
        'span',
        { style: prefixStyle },
        onRenderPrefix ? onRenderPrefix(props) : prefix
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_TextField2.TextField, _extends({}, this.props, {
        onRenderPrefix: this.handleRenderPrefix
      }));
    }
  }]);

  return TextField;
}(_react2.default.Component);

exports.default = TextField;