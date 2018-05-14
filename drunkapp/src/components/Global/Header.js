
//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
   
//Assets
import logo from './images/delivery.PNG';
import './css/Header.css';

class Header extends Component {

   static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() { 

  const { title, items } = this.props;

    return (
      <div className="Header">
       <div className="logo">
         <img src={logo} alt="logo" />
          <h2>{title}</h2>

          <ul className="menu">

          {
            items && items.map(
            (item, key) => <li key={key}>{item.url}>{item.title}</li>
              )
            }
          </ul>
          
        </div>
      </div>
    );
  }
}

export default Header;
