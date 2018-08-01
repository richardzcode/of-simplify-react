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
      <CommandBarItem key="home" icon="Home" style={{ icon: { fontWeight: 'bold' } }}  checked>Home</CommandBarItem>
      <CommandBarItem key="cat" icon="Cat">Cat</CommandBarItem>
      <CommandBarItem key="coffee" icon="CoffeeScript">Coffee</CommandBarItem>

      <CommandBarItem key="preferences" overflow>Preferences</CommandBarItem>

      <CommandBarItem key="signOut" icon="SignOut" style={{ textDecoration: 'underline' }} far>Sign Out</CommandBarItem>
    </CommandBar>
  }
}

export default App;
```

### AutoComplete

- Simple auto-complete component combines `TextField` and `List`

```
import React, { Component } from 'react';
import { AutoComplete } from 'of-simplify-react';

const directors = [
  { name: 'John Thompson' },
  { name: 'Bradford Smith' },
  { name: 'Satya Nadella' },
  { name: 'William Gates' },
  { name: 'Amy Hood' },
  { name: 'Christopher Caposseia' },
  { name: 'Kathleen Hogan' },
  { name: 'Jean-Philippe Courtois' },
  { name: 'Margaret Johnson' },
  { name: 'Kevin Scott' },
  { name: 'Sean Ventura' },
  { name: 'Reid Hoffman' },
  { name: 'Hugh Johnston' },
  { name: 'Teri List-Stoll' },
  { name: 'Charles Noski' },
  { name: 'Helmut Panke' },
  { name: 'Sandra Peterson' },
  { name: 'Charles Scharf' },
  { name: 'John Stanton' },
  { name: 'Padmasree Warrior' }
];

const autoCompleteSearch= function(directors, q) {
  q = q.toLowerCase();
  return directors.filter(director => director.name.toLowerCase().match(q))
}

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    console.log('selected ' + val);
  }

  autoCompleteRenderCell(director, style) {
    return <div style={style.name}>director.name</div>
  }

  render() {
    const style = {
      list: {
        marginLeft: '5em',
        item: { name: { color: 'blue' } }
      }
    }

    <AutoComplete
      prefix="Search Board"
      data={directors}
      value=""
      style={style}
      autoCompleteValue={director => director.name}
      autoCompleteSearch={autoCompleteSearch}
      autoCompleteRenderCell={this.autoCompleteRenderCell}
      onChange={this.handleChange}
    />
  }
}

export default App;
```
