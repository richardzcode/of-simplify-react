import React from 'react';
import { JS, Logger } from 'fsts';

const logger = new Logger('NavItem');

export default class NavItem extends React.Component {
  static toCommandBarItem(el, inheritedProps, navigator) {
    const { label, icon, style, iconStyle, overflow, far } = el.props;
    const theme = inheritedProps.theme || el.props.theme || {};
    const navigatorTheme = theme.Navigator || {};
    const rootStyle = Object.assign({}, navigatorTheme.item, style);
    const iconStyl = Object.assign({}, navigatorTheme.icon, iconStyle);

    return Object.assign(
      {
        key: el.key,
        name: label || el.props.children,
        iconProps: icon? { iconName: icon } : null,
        buttonStyles: { root: rootStyle, icon: iconStyl },
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
