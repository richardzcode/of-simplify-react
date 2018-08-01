import React, { Component } from 'react';
import { Logger, JS } from 'fsts';
import { TextField } from 'of-simplify-react';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';

import List from './List';

const logger = new Logger('AutoComplete');

export default class AutoComplete extends Component {
  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);

    this.state = {
      current_value: props.value,
      suggestions: [],
      show_suggestions: false
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.setState({ current_value: value });
    }
  }

  handleFocus() {
    const { current_value } = this.state;
    this._loadSuggestions(current_value);
    this.setState({ show_suggestions: true });
  }

  handleBlur() {
    const that = this;
    setTimeout(function() {
      that.setState({ show_suggestions: false });
    }, 100);
  }

  handleChange(val) {
    this._loadSuggestions(val);
    this.setState({
      current_value: val,
      show_suggestions: true
    });
  }

  handleKeyUp(event) {
    const key = event.key;
    if (key === 'Enter') {
      const { current_value } = this.state;
      this._submit(current_value);
    }
    if (key === 'Escape') {
      this._cancel();
    }
  }

  handleItemClick(item) {
    logger.debug('item clicked', item);
    const { autoCompleteValue } = this.props;
    const value = autoCompleteValue
      ? autoCompleteValue(item)
      : JSON.stringify(item);
    this.setState({
      current_value: value,
      show_suggestions: false
    });
    this._submit(value);
  }

  _defaultSearch(q) {
    if (!q) { return []; }

    const data = this.props.data || [];
    return data.filter(item => {
      const val = item._autoCompleteValue || JSON.stringify(item);
      q = q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      const r = new RegExp('.*' + q + '.*', 'i');
      return val.match(r);
    });
  }

  _loadSuggestions(val) {
    const { autoCompleteSearch, data } = this.props;
    let suggestions = autoCompleteSearch
      ? autoCompleteSearch(data, val)
      : this._defaultSearch(val);
    this.setState({ suggestions: suggestions });
  }

  _submit(val) {
    this.setState({ show_suggestions: false });

    const { onChange } = this.props;
    if (onChange) { onChange(val); }
  }

  _cancel() {
    const { value } = this.props;
    this.setState({
      current_value: value,
      show_suggestions: false
    });
  }

  render() {
    const { style, autoCompleteRenderCell } = this.props;
    const props = JS.lessProps(this.props, [
      'value', 'onFocus', 'onChanged', 'onKeyUp', 'style',
      'autoCompleteSearch', 'autoCompleteRenderCell'
    ]);

    const { current_value, suggestions, show_suggestions } = this.state;

    return (
      <FocusZone direction={FocusZoneDirection.vertical} style={style}>
        <TextField
          {...this.props}
          value={current_value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChanged={this.handleChange}
          onKeyUp={this.handleKeyUp}
          style={style.textField}
        />
        { show_suggestions &&
          <List
            data={suggestions}
            style={style.list}
            autoCompleteRenderCell={autoCompleteRenderCell}
            onItemClick={this.handleItemClick}
          />
        }
      </FocusZone>
    )
  }
}
