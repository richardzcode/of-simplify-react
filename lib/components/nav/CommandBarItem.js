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

var logger = new _fsts.Logger('CommandBarItem');

var CommandBarItem = function (_React$Component) {
  _inherits(CommandBarItem, _React$Component);

  function CommandBarItem() {
    _classCallCheck(this, CommandBarItem);

    return _possibleConstructorReturn(this, (CommandBarItem.__proto__ || Object.getPrototypeOf(CommandBarItem)).apply(this, arguments));
  }

  _createClass(CommandBarItem, [{
    key: 'render',
    value: function render() {
      logger.warn('CommandBarItem is just a placeholder, not for actual rendering');
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }], [{
    key: 'toCommandBarItem',
    value: function toCommandBarItem(el, inheritedProps, bar) {
      var _el$props = el.props,
          label = _el$props.label,
          icon = _el$props.icon,
          style = _el$props.style,
          overflow = _el$props.overflow,
          far = _el$props.far;

      var theme = inheritedProps.theme || el.props.theme || {};
      var barStyle = theme.CommandBar || {};
      var itemStyle = Object.assign({}, barStyle.item, style);
      var rootStyle = _fsts.JS.lessProps(itemStyle, 'icon');

      return Object.assign({
        key: el.key,
        name: label || el.props.children,
        iconProps: icon ? { iconName: icon } : null,
        buttonStyles: { root: rootStyle, icon: itemStyle.icon },
        far: !!far,
        overflow: !!overflow,
        onClick: function onClick() {
          return bar && bar.commandHandler(el.key);
        }
      }, _fsts.JS.lessProps(el.props, ['label', 'icon', 'overflow', 'far', 'children']));
    }
  }]);

  return CommandBarItem;
}(_react2.default.Component);

exports.default = CommandBarItem;