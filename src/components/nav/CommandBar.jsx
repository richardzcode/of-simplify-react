import React from 'react';
import { JS } from 'fsts';
import { CommandBar as _CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

import CommandBarItem from './CommandBarItem';

export default class CommandBar extends React.Component {
  constructor(props) {
    super(props);

    this.commandHandler = this.commandHandler.bind(this);
  }

  commandHandler(key) {
    const { onCommand } = this.props;
    if (onCommand) { onCommand(key); }
  }

  render() {
    const { style } = this.props;
    const theme = this.props.theme || {};
    const rootStyle = Object.assign({}, JS.lessProps(theme.CommandBar, 'item'), style);

    const inheritedProps = { theme };
    const bar = this;
    const all_items = React.Children.map(this.props.children, (child, index) => {
      if (child.type !== CommandBarItem) { return {}; }
      return CommandBarItem.toCommandBarItem(child, inheritedProps, bar);
    });

    const items = all_items.filter(item => !item.far && !item.overflow);
    const overflow_items = all_items.filter(item => item.overflow);
    const far_items = all_items.filter(item => item.far);

    return (
      <_CommandBar
        items={items}
        overflowItems={overflow_items}
        farItems={far_items}
        styles={{root: rootStyle}}
      />
    )
  }
}
