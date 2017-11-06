import React, { Component } from 'react';
import './Twitch.css';

class Twitch extends Component {
  render() {
    return (
      <div className="Twitch">
      	<h4>TWITCH {this.props.content}</h4>
      </div>
    );
  }
}

export default Twitch;