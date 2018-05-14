import React, { Component } from 'react';
import Contador from './components/Contador/Contador';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return ( <div>
      <Contador valor={6} />
      <hr />
      <Contador valor={0} />
      </div>
    );
  }
}

export default App;
