import React, {Component} from 'react';
// import  ReactDOM from 'react-dom';	

export default class CountriesForm extends Component {
	addCountry(event){
		event.preventDefault();
		var countryName = this.refs.country.value.trim();
		Meteor	.call('addCountry',countryName,()=>{
		this.refs.country.value = "";
		});
	}
	render(){
		return(
			<form className="new-country" onSubmit={this.addCountry.bind(this)}>
				<input 
				type="text" 
				ref="country"
				placeholder="Insert Country"/>
			</form>
			)
	}
}