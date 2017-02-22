import  React from 'react';
import  ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import CountriesForm from './CountriesForm.jsx';
import CountrySingle from './CountrySingle.jsx';

Countries = new Mongo.Collection('countries');

export default class CountriesWrapper extends TrackerReact(React.Component){
	constructor(){
		super();
		this.state = {
			subscription:{
				countries:Meteor.subscribe('allCountries')
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.countries.stop();
	}
	countries(){
		return Countries.find().fetch();
	}

	render() {
			let countriesView = this.countries();	
			if(countriesView.length == 0){
				return (<div>Loading...</div>);
			}
		return(
			<div>
			<h1>Countries</h1>
			<CountriesForm/>
			<ul className="countries">
			{this.countries().map( (country)=>{
			return <CountrySingle key={country._id} eachCountry={country}/>
			})}
			</ul>
			</div>
			)
	}
	
}
