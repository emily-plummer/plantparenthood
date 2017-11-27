import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Form from './containers/Form';

const App = ({ plants }) => (
  <div className="App">
    <p className="App-intro">
      <span role='img' aria-label='plant emoji'>🌱</span> Plant Parenthood <span role='img' aria-label='plant emoji'>🌱</span>
    </p>
    <Link to="/plants">See all Plants</Link>
    <Form/>
  </div>
);

export default App;
