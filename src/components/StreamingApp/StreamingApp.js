import React, { Component } from 'react';
import './StreamingApp.css';
import MainElement from '../StreamBackground/MainElement';

class StreamingApp extends Component {
  render() {
    return (
      <div className="StreamingApp">
        <h1>React Project Streaming</h1>
        <MainElement />
      </div>
    );
  }
}

export default StreamingApp;
