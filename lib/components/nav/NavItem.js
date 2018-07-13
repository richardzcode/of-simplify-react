'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _fsts.Logger('NavItem');

var NavItem = function (_React$Component) {
  _inherits(NavItem, _React$Component);

  function NavItem() {
    _classCallCheck(this, NavItem);

    return _possibleConstructorReturn(this, (NavItem.__proto__ || Object.getPrototypeOf(NavItem)).apply(this, arguments));
  }

  _createClass(NavItem, [{
    key: 'render',
    value: function render() {
      logger.warn('NavItem is just a placeholder, not for actual rendering');
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }], [{
    key: 'toCommandBarItem',
    value: function toCommandBarItem(el) {
      var _el$props = el.props,
          label = _el$props.label,
          icon = _el$props.icon,
          overflow = _el$props.overflow,
          far = _el$props.far;

      return Object.assign({
        key: el.key,
        name: label || el.props.children,
        iconProps: icon ? { iconName: icon } : null,
        far: !!far,
        overflow: !!overflow
      }, _fsts.JS.lessProps(el.props, ['label', 'icon', 'overflow', 'far', 'children']));
    }
  }]);

  return NavItem;
}(_react2.default.Component);

exports.default = NavItem;