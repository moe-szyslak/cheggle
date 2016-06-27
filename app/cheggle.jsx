import React, { PropTypes, Component } from 'react';
import platform from 'platform';

class Cheggle extends Component {
  componentDidMount() {
    // this makes sure our style is injected in the head (once)
    if (document.querySelector('style#cheggle') === null) {
      const cheggle = document.createElement('style');
      cheggle.id = 'cheggle';
      cheggle.type = 'text/css';
      cheggle.innerHTML =
`
.cheggle {
position: relative;
display: inline-block;
pointer-events: auto;
margin: 0;
padding: 5px;
}
.cheggle input:checked + .track {
border-color: #4cd964;
background-color: #4cd964;
}
.cheggle.dragging .handle {
background-color: #f2f2f2 !important;
}
.cheggle input {
display: none;
}
.cheggle .track {
-webkit-transition-timing-function: ease-in-out;
-moz-transition-timing-function: ease-in-out;
-o-transition-timing-function: ease-in-out;
transition-timing-function: ease-in-out;
-webkit-transition-duration: 0.3s;
-moz-transition-duration: 0.3s;
-o-transition-duration: 0.3s;
transition-duration: 0.3s;
-webkit-transition-property: background-color, border;
-moz-transition-property: background-color, border;
-o-transition-property: background-color, border;
transition-property: background-color, border;
display: inline-block;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
width: 51px;
height: 31px;
border: solid 2px #e6e6e6;
-webkit-border-radius: 20px;
-moz-border-radius: 20px;
border-radius: 20px;
background-color: #fff;
content: ' ';
cursor: pointer;
pointer-events: none;
}
.cheggle .handle {
-webkit-transition: 0.3s cubic-bezier(0, 1.1, 1, 1.1);
-moz-transition: 0.3s cubic-bezier(0, 1.1, 1, 1.1);
-o-transition: 0.3s cubic-bezier(0, 1.1, 1, 1.1);
transition: 0.3s cubic-bezier(0, 1.1, 1, 1.1);
-webkit-transition-property: background-color, -webkit-transform;
transition-property: background-color, -webkit-transform;
-moz-transition-property: background-color, transform, -moz-transform;
-o-transition-property: background-color, transform, -o-transform;
transition-property: background-color, transform;
transition-property: background-color, transform, -webkit-transform, -moz-transform, -o-transform;
position: absolute;
display: block;
width: 27px;
height: 27px;
-webkit-border-radius: 27px;
-moz-border-radius: 27px;
border-radius: 27px;
background-color: #fff;
top: 7px;
left: 7px;
-webkit-box-shadow: 0 2px 7px rgba(0, 0, 0, 0.35), 0 1px 1px rgba(0, 0, 0, 0.15);
-moz-box-shadow: 0 2px 7px rgba(0, 0, 0, 0.35), 0 1px 1px rgba(0, 0, 0, 0.15);
box-shadow: 0 2px 7px rgba(0, 0, 0, 0.35), 0 1px 1px rgba(0, 0, 0, 0.15);
}
.cheggle .handle:before {
position: absolute;
top: -4px;
left: -21.5px;
padding: 18.5px 34px;
content: " ";
}
.cheggle input:checked + .track .handle {
-webkit-transform: translate3d(20px, 0, 0);
-moz-transform: translate3d(20px, 0, 0);
transform: translate3d(20px, 0, 0);
background-color: #fff;
}
.cheggle input:disabled + .track {
opacity: .6;
}
.cheggle-small .track {
border: 0;
width: 34px;
height: 15px;
background: #9e9e9e;
}
.cheggle-small input:checked + .track {
background: rgba(0, 150, 137, 0.5);
}
.cheggle-small .handle {
top: 2px;
left: 4px;
width: 21px;
height: 21px;
-webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
-moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
}
.cheggle-small input:checked + .track .handle {
-webkit-transform: translate3d(16px, 0, 0);
-moz-transform: translate3d(16px, 0, 0);
transform: translate3d(16px, 0, 0);
background: #009689;
}
.cheggle-desktop {
display: inline-block;
position: relative;
width: 28px;
height: 28px;
background-color: transparent;
pointer-events: auto;
}
.cheggle-desktop input[type="checkbox"] {
visibility: hidden;
}
.cheggle-desktop input[type="checkbox"] + div.track {
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
border: 2px solid #57bba7;
background-color: #fff;
-webkit-transition: all 250s ease-in-out;
-moz-transition: all 250s ease-in-out;
-o-transition: all 250s ease-in-out;
transition: all 250ms ease-in-out;
}
.cheggle-desktop input[type="checkbox"]:disabled + div.track {
opacity: 0.35;
}
.cheggle-desktop input[type="checkbox"]:checked + div.track {
background-color: #57bba7;
}
.cheggle-desktop input[type="checkbox"] + div.track > div.handle {
position: absolute;
width: 16px;
height: 6px;
}
.cheggle-desktop input[type="checkbox"]:checked + div.track > div.handle {
border: 2px solid #fff;
border-top: none;
border-right: none;
-webkit-transform: rotate(-45deg);
-moz-transform: rotate(-45deg);
-ms-transform: rotate(-45deg);
-o-transform: rotate(-45deg);
transform: rotate(-45deg);
top: 6px;
left: 3px;}`;
      document.head.appendChild(cheggle);
    }

    // initiating platform appropriately...
    switch (
      this.props.platform.toLowerCase() === 'auto'
        ? platform.os.family.toLowerCase()
        : this.props.platform.toLowerCase()
    ) {
      case 'ios':
        this.refs.cheggleLabel.classList.add('cheggle');
        break;

      case 'android':
        this.refs.cheggleLabel.classList.add('cheggle', 'cheggle-small');
        break;

      default:
        this.refs.cheggleLabel.classList.add('cheggle-desktop');
        break;
    }
  }

  handleChange(e) {
    this.props.onChange(!(e.target.value === 'true'));
  }

  render() {
    if (this.props.watchPlatform === true && this.refs.cheggleLabel !== undefined) {
      // resting class...
      this.refs.cheggleLabel.classList.remove('cheggle', 'cheggle-small', 'cheggle-desktop');

      switch (
        this.props.platform.toLowerCase() === 'auto'
          ? platform.os.family.toLowerCase()
          : this.props.platform.toLowerCase()
      ) {
        case 'ios':
          this.refs.cheggleLabel.classList.add('cheggle');
          break;

        case 'android':
          this.refs.cheggleLabel.classList.add('cheggle', 'cheggle-small');
          break;

        default:
          this.refs.cheggleLabel.classList.add('cheggle-desktop');
          break;
      }
    }

    return (
      <label ref="cheggleLabel">
        <input
          type="checkbox"
          value={this.props.value}
          checked={this.props.value}
          onChange={(e) => this.handleChange(e)}
          disabled={this.props.disabled}
        />
        <div className="track">
          <div className="handle"></div>
        </div>
      </label>
    );
  }
}

Cheggle.propTypes = {
  onChange: PropTypes.func.isRequired,
  platform: PropTypes.string,
  value: PropTypes.bool,
  watchPlatform: PropTypes.bool,
  disabled: PropTypes.bool,
};

Cheggle.defaultProps = {
  platform: 'auto',
  value: false,
  watchPlatform: false,
  disabled: false,
};

module.exports = Cheggle;
