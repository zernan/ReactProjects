import React, { Component } from 'react';
import './Searcher.css';

class Searcher extends Component {
  render() {
    return (
      <div className="Searcher">
          <h5>Type keyword to search streams</h5>
		  <input type='text' id='txtBox'/>
		  <button id='searchBtn' height='100' width='200'>Search</button>
      </div>
    );
  }
}

export default Searcher;