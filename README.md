## Checkbox + Toggle = Cheggle™

React Component that displays a checkbox or a toggle depending on the platform.

*Most* of Cheggle styling taken from ionic framework with minor tweaks.

### Installation

`npm install cheggle --save`

### Usage

```JavaScript
  import Cheggle from 'cheggle';

  <Cheggle
    value={this.state.cheggle}
    platform={this.state.platform}
    watchPlatform={this.state.watchPlatform}
    onChange={(e) => this.handleChange(e)}
    disabled={this.state.disabled}
  />
```
