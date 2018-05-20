import React, { Component } from 'react';
import classes from'./calculadora.css';
 
export default class calculadora extends component{
 
  constructor() {
    super();
 
    this.state = {
      count: 0,
      number1: 0,
      number2: 1,
      result: 0
    };
 
    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
  }
 
  // Method to know if the component is load
  componentDidMount() {
    this.setState({
      count: 1
    }); 
  }
 
  // Function to handle the click
  handleCountClick(e) {
    if(e.target.id === "add") {
      this.setState({
        count: this.state.count + 1
        });
    } else if (e.target.id === "subtract" && this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    } else {
      this.setState({
        count: 0
      })
    }
  }
 
  handleResultClick(e) {
    this.setState({
      result: this.state.number1 + this.state.number2
    }); 
  }
 
  // Updating the input values
  handleInputChanged(e) {
    if(e.target.id === "number1") {
      this.setState({
        number1: Number(e.target.value)
      });
    } else {
      this.setState({
        number2: Number(e.target.value)
      });
    }
  }
 
  render() {
    console.log('Ejecuta render()');
    // Render this HTML
      return (
        <div className="Content">
          <h1>CALCULADORA</h1>
 
          <h2>Count: { this.state.count }</h2>
 
          <p>
            <button id="add" onClick={this.handleCountClick}> + </button>
            <button id="subtract" onClick={this.handleCountClick}> - </button>
            <button id="reset" onClick={this.handleCountClick}> Reset </button>
          </p>
 
          <h2>Calculando</h2>
          <input id="number1" type="number" value = { this.state.number1 } onChange = { this.handleInputChanged } />
          +
          <input id="number2" type="number" value = { this.state.number2 } onChange = { this.handleInputChanged }/>
 
          <button id="result" onClick={this.handleResultClick}> = </button>
 
          { this.state.result }
        </div>
      );
  }
}
 