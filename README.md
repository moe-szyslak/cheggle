## Checkbox + Toggle = Cheggle™

![Cheggle](http://i.imgur.com/AI6LLo5.jpg "Cheggle")

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

  /**
   * PropTypes
   *
   * value <bool>: value to render as Cheggle. default: false
   * platform <string>: platform to render as iOS, Android or Desktop. default: 'auto'
   * watchPlatform <bool>: watch platform change. default: false
   * onChange <func>: function that'll be called with new value.
   * disabled <bool>: disable Cheggle. default: false
   */
```
