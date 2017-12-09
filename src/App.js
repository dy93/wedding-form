import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import TimePicker from 'react-toolbox/lib/time_picker/TimePicker';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React ToolBox</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button raised primary>This is RT!!</Button>
        <TimePicker >kerker</TimePicker>
      </div>
    );
  }
}

export default App;
