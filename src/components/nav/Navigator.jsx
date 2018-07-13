import React from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

import OfTheme from '../OfTheme';
import NavItem from './NavItem';

export default class Navigator extends React.Component {
  render() {
    const theme = this.props.theme || OfTheme;

    const all_items = React.Children.map(this.props.children, (child, index) => {
      if (child.type !== NavItem) { return {}; }
      return NavItem.toCommandBarItem(child);
    });

    const items = all_items.filter(item => !item.far && !item.overflow);
    const overflow_items = all_items.filter(item => item.overflow);
    const far_items = all_items.filter(item => item.far);

    return (
      <CommandBar
        items={items}
        overflowItems={overflow_items}
        farItems={far_items}
        style={theme.Navigator}
      />
    )
  }
}
