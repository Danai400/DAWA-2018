import React, {Component} from 'react';
import classes from './Promociones.css';

export default class Promociones extends Component{

	render(){
		return (<div>
			<h1>Promociones</h1>
			<h2>Las mejores promociones sólo con DrunkApp </h2>
			
			<table center>
  <tr>
    <th><img src="./img/piscos.jpg"/>
    <a href="Promo.js" class="btn btn-success"> Comprar</a>
        </th>
    <th><img src="./img/wiski.jpg"/>
    <a href="Promo.js" class="btn btn-success"> Comprar</a>
    </th> 
    <th><img src="./img/piscos.jpg"/>
    <a href="Promo.js" class="btn btn-success"> Comprar</a>
    </th>
    </tr>
    <tr>
    <td><img src="./img/aperitivo.jpg"/>
    <a href="Promo.js" class="btn btn-success"> Comprar</a>
    </td>
    <td><img src="./img/vinotinto.jpg"/>
    <a href="Promo.js" class="btn btn-success"> Comprar</a>
    </td> 
    <td><img src="./img/chanpagne.jpg"/>
    <a href="Promo.js" class="btn btn-success"> Comprar</a>
    </td>
  </tr>
  
</table>
 			
			</div>)


	}
}