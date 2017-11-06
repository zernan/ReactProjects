import React, { Component } from 'react';
import Twitch from './Twitch';
import Twitter from './Twitter';
import Searcher from './Searcher';
import './Container.css'

class Container extends Component {
  render() {
    return (
      <div className="Container">
          <h3>CONTAINER DIV</h3>
          <Twitch />
          <Twitter />
          <Searcher />
      </div>
    );
  }
}

export default Container;