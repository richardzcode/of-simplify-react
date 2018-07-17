# of-simplify-react
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/of-simplify-react.svg)](https://badge.fury.io/js/of-simplify-react)
[![npm downloads](https://img.shields.io/npm/dm/of-simplify-react.svg)](https://www.npmjs.com/package/of-simplify-react)
[![GitHub last commit](https://img.shields.io/github/last-commit/richardzcode/of-simplify-react.svg)]()

Easy to use React components extend [Office UI Fabric](https://github.com/OfficeDev/office-ui-fabric-react)

## Install

```
npm install of-simplify-react
```

## Components

### Navigator

Navigator wraps around `CommandBar` to provide a simple menu system solution.

```
import React, { Component } from 'react';
import OfSimplify, { Navigator, NavItem } from 'of-simplify-react';

OfSimplify.initializeIcons(); // in order to show icons

class App extends Component {
  constructor(props) {
    super(props);
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate(key) {
    console.log('menu item clicked: ' + key);
  }

  render() {
    <Navigator onNavigate={this.handleNavigate} style={{ padding: '0.5em', display: 'flex', alignItems: 'flex-end' }}>
      <NavItem key="home" icon="Home" iconStyle={{ fontWeight: 'bold' }}  checked>Home</NavItem>
      <NavItem key="cat" icon="Cat">Cat</NavItem>
      <NavItem key="coffee" icon="CoffeeScript">Coffee</NavItem>

      <NavItem key="preferences" overflow>Preferences</NavItem>

      <NavItem key="signOut" icon="SignOut" style={{ textDecoration: 'underline' }} far>Sign Out</NavItem>
    </Navigator>
  }
}
```
