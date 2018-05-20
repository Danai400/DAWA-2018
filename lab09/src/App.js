import React, { Component } from 'react';
import Contador from './components/Contador/Contador';
import Calculadora from './components/Calculadora/Calculadora';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return ( 

    	<div>
      <Contador valor={6} />
      <Calculadora />

      </div>
      
    );
  }
}

export default App;
