'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ListItem, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          data = _props.data,
          onClick = _props.onClick;

      if (onClick) {
        onClick(data);
      }
    }
  }, {
    key: '_itemStyle',
    value: function _itemStyle() {
      var _props2 = this.props,
          style = _props2.style,
          index = _props2.index;


      var itemStyle = style || {};
      if (index || index === 0) {
        var odd = index % 2;
        if (odd) {
          if (itemStyle.odd) {
            itemStyle = Object.assign({}, itemStyle, itemStyle.odd);
          }
        } else {
          itemStyle = Object.assign({}, itemStyle, itemStyle.even);
        }
      }

      return itemStyle;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          data = _props3.data,
          autoCompleteRenderCell = _props3.autoCompleteRenderCell;


      var itemStyle = this._itemStyle();
      var descStyle = itemStyle.description;

      return _react2.default.createElement(
        'div',
        {
          onClick: this.handleClick,
          'data-is-focusable': true,
          style: itemStyle
        },
        autoCompleteRenderCell ? autoCompleteRenderCell(data, itemStyle) : JSON.stringify(data)
      );
    }
  }]);

  return ListItem;
}(_react.Component);

exports.default = ListItem;