import React, {Component} from 'react';
// import  ReactDOM from 'react-dom';	

export default class CountriesForm extends Component {
	addCountry(event){
		event.preventDefault();
		var countryName = this.refs.country.value.trim();
		Meteor	.call('addCountry',countryName,(error,data)=>{
		if(error){
			Bert.alert('Please login before submitting.');
		}
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