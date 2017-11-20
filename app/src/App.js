import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Plant Parenthood
        </p>
        <Form/>
      </div>
    );
  }
}

export default App;
