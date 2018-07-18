'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

var _CommandBar2 = require('office-ui-fabric-react/lib/CommandBar');

var _CommandBarItem = require('./CommandBarItem');

var _CommandBarItem2 = _interopRequireDefault(_CommandBarItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommandBar = function (_React$Component) {
  _inherits(CommandBar, _React$Component);

  function CommandBar(props) {
    _classCallCheck(this, CommandBar);

    var _this = _possibleConstructorReturn(this, (CommandBar.__proto__ || Object.getPrototypeOf(CommandBar)).call(this, props));

    _this.commandHandler = _this.commandHandler.bind(_this);
    return _this;
  }

  _createClass(CommandBar, [{
    key: 'commandHandler',
    value: function commandHandler(key) {
      var onCommand = this.props.onCommand;

      if (onCommand) {
        onCommand(key);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var style = this.props.style;

      var theme = this.props.theme || {};
      var rootStyle = Object.assign({}, _fsts.JS.lessProps(theme.CommandBar, 'item'), style);

      var inheritedProps = { theme: theme };
      var bar = this;
      var all_items = _react2.default.Children.map(this.props.children, function (child, index) {
        if (child.type !== _CommandBarItem2.default) {
          return {};
        }
        return _CommandBarItem2.default.toCommandBarItem(child, inheritedProps, bar);
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

      return _react2.default.createElement(_CommandBar2.CommandBar, {
        items: items,
        overflowItems: overflow_items,
        farItems: far_items,
        styles: { root: rootStyle }
      });
    }
  }]);

  return CommandBar;
}(_react2.default.Component);

exports.default = CommandBar;