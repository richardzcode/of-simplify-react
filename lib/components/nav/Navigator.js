'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CommandBar = require('office-ui-fabric-react/lib/CommandBar');

var _OfTheme = require('../OfTheme');

var _OfTheme2 = _interopRequireDefault(_OfTheme);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigator = function (_React$Component) {
  _inherits(Navigator, _React$Component);

  function Navigator(props) {
    _classCallCheck(this, Navigator);

    var _this = _possibleConstructorReturn(this, (Navigator.__proto__ || Object.getPrototypeOf(Navigator)).call(this, props));

    _this.navigateHandler = _this.navigateHandler.bind(_this);
    return _this;
  }

  _createClass(Navigator, [{
    key: 'navigateHandler',
    value: function navigateHandler(key) {
      var onNavigate = this.props.onNavigate;

      if (onNavigate) {
        onNavigate(key);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var theme = this.props.theme || _OfTheme2.default;

      var navigator = this;
      var all_items = _react2.default.Children.map(this.props.children, function (child, index) {
        if (child.type !== _NavItem2.default) {
          return {};
        }
        return _NavItem2.default.toCommandBarItem(child, navigator);
      });

      var items = all_items.filter(function (item) {
        return !item.far && !item.overflow;
      });
      var overflow_items = all_items.filter(function (item) {
        return item.overflow;
      });
      var far_items = all_items.filter(function (item) {
        return item.far;
      });

      return _react2.default.createElement(_CommandBar.CommandBar, {
        items: items,
        overflowItems: overflow_items,
        farItems: far_items,
        style: theme.Navigator
      });
    }
  }]);

  return Navigator;
}(_react2.default.Component);

exports.default = Navigator;