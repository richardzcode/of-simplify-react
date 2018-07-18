import React from 'react';
import { JS, Logger } from 'fsts';

const logger = new Logger('CommandBarItem');

export default class CommandBarItem extends React.Component {
  static toCommandBarItem(el, inheritedProps, bar) {
    const { label, icon, style, overflow, far } = el.props;
    const theme = inheritedProps.theme || el.props.theme || {};
    const barStyle = theme.CommandBar || {};
    const itemStyle = Object.assign({}, barStyle.item, style);
    const rootStyle = JS.lessProps(itemStyle, 'icon');

    return Object.assign(
      {
        key: el.key,
        name: label || el.props.children,
        iconProps: icon? { iconName: icon } : null,
        buttonStyles: { root: rootStyle, icon: itemStyle.icon },
        far: !!far,
        overflow: !!overflow,
        onClick: () => bar && bar.commandHandler(el.key)
      },
      JS.lessProps(el.props, [
        'label',
        'icon',
        'overflow',
        'far',
        'children'
      ])
    );
  }

  render() {
    logger.warn('CommandBarItem is just a placeholder, not for actual rendering');
    return <div>{this.props.children}</div>
  }
}
