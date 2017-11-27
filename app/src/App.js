import React, { Component } from 'react';
import './App.css';
import Form from './containers/Form';
import PlantList from './containers/PlantList';

const App = ({ plants }) => (
  <div className="App">
    <p className="App-intro">
      Plant Parenthood
    </p>
    <Form/>
    <PlantList />
  </div>
);

export default App;
