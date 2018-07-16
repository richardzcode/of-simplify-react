# of-simplify-react
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
    <Navigator onNavigate={this.handleNavigate}>
      <NavItem key="home" icon="Home" checked>Home</NavItem>
      <NavItem key="cat" icon="Cat">Cat</NavItem>
      <NavItem key="coffee" icon="CoffeeScript">Coffee</NavItem>

      <NavItem key="preferences" overflow>Preferences</NavItem>

      <NavItem key="signOut" icon="SignOut" far>Sign Out</NavItem>
    </Navigator>
  }
}
```
