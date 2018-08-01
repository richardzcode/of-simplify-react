'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

var _ofSimplifyReact = require('of-simplify-react');

var _FocusZone = require('office-ui-fabric-react/lib/FocusZone');

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _fsts.Logger('AutoComplete');

var AutoComplete = function (_Component) {
  _inherits(AutoComplete, _Component);

  function AutoComplete(props) {
    _classCallCheck(this, AutoComplete);

    var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.handleItemClick = _this.handleItemClick.bind(_this);

    _this.state = {
      current_value: props.value,
      suggestions: [],
      show_suggestions: false
    };
    return _this;
  }

  _createClass(AutoComplete, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var value = this.props.value;

      if (value !== prevProps.value) {
        this.setState({ current_value: value });
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      var current_value = this.state.current_value;

      this._loadSuggestions(current_value);
      this.setState({ show_suggestions: true });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      var that = this;
      setTimeout(function () {
        that.setState({ show_suggestions: false });
      }, 100);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(val) {
      this._loadSuggestions(val);
      this.setState({
        current_value: val,
        show_suggestions: true
      });
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      var key = event.key;
      if (key === 'Enter') {
        var current_value = this.state.current_value;

        this._submit(current_value);
      }
      if (key === 'Escape') {
        this._cancel();
      }
    }
  }, {
    key: 'handleItemClick',
    value: function handleItemClick(item) {
      logger.debug('item clicked', item);
      var autoCompleteValue = this.props.autoCompleteValue;

      var value = autoCompleteValue ? autoCompleteValue(item) : JSON.stringify(item);
      this.setState({
        current_value: value,
        show_suggestions: false
      });
      this._submit(value);
    }
  }, {
    key: '_defaultSearch',
    value: function _defaultSearch(q) {
      if (!q) {
        return [];
      }

      var data = this.props.data || [];
      return data.filter(function (item) {
        var val = item._autoCompleteValue || JSON.stringify(item);
        q = q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        var r = new RegExp('.*' + q + '.*', 'i');
        return val.match(r);
      });
    }
  }, {
    key: '_loadSuggestions',
    value: function _loadSuggestions(val) {
      var _props = this.props,
          autoCompleteSearch = _props.autoCompleteSearch,
          data = _props.data;

      var suggestions = autoCompleteSearch ? autoCompleteSearch(data, val) : this._defaultSearch(val);
      this.setState({ suggestions: suggestions });
    }
  }, {
    key: '_submit',
    value: function _submit(val) {
      this.setState({ show_suggestions: false });

      var onChange = this.props.onChange;

      if (onChange) {
        onChange(val);
      }
    }
  }, {
    key: '_cancel',
    value: function _cancel() {
      var value = this.props.value;

      this.setState({
        current_value: value,
        show_suggestions: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          style = _props2.style,
          autoCompleteRenderCell = _props2.autoCompleteRenderCell;

      var props = _fsts.JS.lessProps(this.props, ['value', 'onFocus', 'onChanged', 'onKeyUp', 'style', 'autoCompleteSearch', 'autoCompleteRenderCell']);

      var _state = this.state,
          current_value = _state.current_value,
          suggestions = _state.suggestions,
          show_suggestions = _state.show_suggestions;


      return _react2.default.createElement(
        _FocusZone.FocusZone,
        { direction: _FocusZone.FocusZoneDirection.vertical, style: style },
        _react2.default.createElement(_ofSimplifyReact.TextField, _extends({}, this.props, {
          value: current_value,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onChanged: this.handleChange,
          onKeyUp: this.handleKeyUp,
          style: style.textField
        })),
        show_suggestions && _react2.default.createElement(_List2.default, {
          data: suggestions,
          style: style.list,
          autoCompleteRenderCell: autoCompleteRenderCell,
          onItemClick: this.handleItemClick
        })
      );
    }
  }]);

  return AutoComplete;
}(_react.Component);

exports.default = AutoComplete;