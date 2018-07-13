# of-simplify-react
Easy to use React components extend [Office UI Fabric](https://github.com/OfficeDev/office-ui-fabric-react)

## Install

```
npm install of-simplify-react
```

## Components

### Navigator

```
import React, { Component } from 'react';
import OfSimplify, { Navigator, NavItem } from 'of-simplify-react';

OfSimplify.initializeIcons(); // in order to show icons

class App extends Component {
  to(path) {
    console.log('go ' + path);
  }

  render() {
    <Navigator>
      <NavItem
        key="home"
        icon="Home"
        checked
        onClick={() => this.to('/')}
      >Home</NavItem>
      <NavItem
        key="cat"
        icon="Cat"
        onClick={() => this.to('/cat')}
      >Cat</NavItem>
      <NavItem
        key="coffee"
        icon="CoffeeScript"
        onClick={() => this.to('/coffee')}
      >Coffee</NavItem>

      <NavItem
        key="preferences"
        overflow
        onClick={() => this.to('/preferences')}
      >Preferences</NavItem>

      <NavItem
        key="sort"
        icon="SignOut"
        far
      >Sign Out</NavItem>
    </Navigator>
  }
}
```
