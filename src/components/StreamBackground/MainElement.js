import React, { Component } from 'react';
import Twitch from '../TwitchComponent/Twitch';
import Twitter from '../TwitterComponent/Twitter';
import Searcher from '../SearchComponent/Searcher';
import './MainElement.css';

class MainElement extends Component { 
  render() {
    
    return (
      <div className="MainElement">
          <Twitch />
          <Twitter />
          <Searcher />
      </div>
    );
  }
}

export default MainElement;