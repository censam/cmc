import React, {Component} from 'react';
// import  ReactDOM from 'react-dom';

export default class CountrySingle extends Component{
	render(){
		return(
			<li>{this.props.eachCountry.country}</li>
			)
	}
}