import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { data, onClick } = this.props;
    if (onClick) { onClick(data); }
  }

  _itemStyle() {
    const { style, index } = this.props;

    let itemStyle = style || {};
    if (index || index === 0) {
      const odd = index % 2;
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

  render() {
    const { data, autoCompleteRenderCell } = this.props;

    const itemStyle = this._itemStyle();
    const descStyle = itemStyle.description;

    return (
      <div
        onClick={this.handleClick}
        data-is-focusable={true}
        style={itemStyle}
      >
        { autoCompleteRenderCell
            ? autoCompleteRenderCell(data, itemStyle)
            : JSON.stringify(data)
        }
      </div>
    )
  }
}
