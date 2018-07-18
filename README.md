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

### CommandBar

- Write `CommandBarItem` like React component.
- Style `CommandBar` and `CommandBarItem` like React component.
- Handle `onCommand` event to reduce repetitive code.

```
import React, { Component } from 'react';
import OfSimplify, { CommandBar, CommandBarItem } from 'of-simplify-react';

OfSimplify.initializeIcons(); // in order to show icons

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCommand = this.handleCommand.bind(this);
  }

  handleCommand(key) {
    console.log('menu item clicked: ' + key);
  }

  render() {
    <CommandBar onCommand={this.handleCommand} style={{ padding: '0.5em', display: 'flex', alignItems: 'flex-end' }}>
      <CommandBarItem key="home" icon="Home" iconStyle={{ fontWeight: 'bold' }}  checked>Home</CommandBarItem>
      <CommandBarItem key="cat" icon="Cat">Cat</CommandBarItem>
      <CommandBarItem key="coffee" icon="CoffeeScript">Coffee</CommandBarItem>

      <CommandBarItem key="preferences" overflow>Preferences</CommandBarItem>

      <CommandBarItem key="signOut" icon="SignOut" style={{ textDecoration: 'underline' }} far>Sign Out</CommandBarItem>
    </CommandBar>
  }
}
```
