import React, { Component } from 'react';
import './Twitter.css';

class Twitter extends Component {
  render() {
    return (
      <div className="Twitter">
          <h4>TWITTER {this.props.content}</h4>
      </div>
    );
  }
}

export default Twitter;