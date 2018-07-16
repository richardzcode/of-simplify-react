import React from 'react';
import { JS, Logger } from 'fsts';

const logger = new Logger('NavItem');

export default class NavItem extends React.Component {
  static toCommandBarItem(el, navigator) {
    const { label, icon, overflow, far } = el.props;
    return Object.assign(
      {
        key: el.key,
        name: label || el.props.children,
        iconProps: icon? { iconName: icon } : null,
        far: !!far,
        overflow: !!overflow,
        onClick: () => navigator && navigator.navigateHandler(el.key)
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
    logger.warn('NavItem is just a placeholder, not for actual rendering');
    return <div>{this.props.children}</div>
  }
}
