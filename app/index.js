/* eslint no-console:0 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import Cheggle from './cheggle.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cheggle: true,
      platform: 'Auto',
      watchPlatform: true,
      disabled: false,
    };
  }

  handleChange(newVal) {
    console.log(newVal);
  }

  handleSelectChange(e) {
    this.setState({ platform: e.target.value });
  }

  handlePlatformChange() {
    this.setState({ watchPlatform: !this.state.watchPlatform });
  }

  render() {
    return (
      <div>
        <select
          value={this.state.platform}
          onChange={(e) => this.handleSelectChange(e)}
        >
          <option value="Auto">Auto</option>
          <option value="iOS">iOS</option>
          <option value="Android">Android</option>
          <option value="Desktop">Desktop</option>
        </select>

        <input
          type="checkbox"
          value={this.state.watchPlatform}
          defaultChecked={this.state.watchPlatform}
          onChange={(e) => this.handlePlatformChange(e)}
        />

        <Cheggle
          defaultValue={this.state.cheggle}
          platform={this.state.platform}
          watchPlatform={this.state.watchPlatform}
          onChange={(e) => this.handleChange(e)}
          disabled={this.state.disabled}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
