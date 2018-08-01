import React, { Component } from 'react';
import { List as _List } from 'office-ui-fabric-react/lib/List';

import ListItem from './ListItem';

export default class List extends Component {
  render() {
    const { data, style, autoCompleteRenderCell, onItemClick } = this.props;

    return (
      <_List
        data-is-scrollable={true}
        items={data}
        style={style}
        onRenderCell={(item, index) => (
          <ListItem
            data={item}
            index={index}
            style={style.item}
            autoCompleteRenderCell={autoCompleteRenderCell}
            onClick={onItemClick}
          />
        )}
      />
    )
  }
}
