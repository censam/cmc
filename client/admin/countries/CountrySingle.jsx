import React, {Component} from 'react';
// import  ReactDOM from 'react-dom';

export default class CountrySingle extends Component{
	toggleChecked(){
			Meteor	.call('toggleCountry',this.props.eachCountry);
	}
	deleteCountry(){
			Meteor	.call('delCountry',this.props.eachCountry);
	}
	render(){
		return(
			<li>
			<input type="checkbox" readOnly={true} checked={this.props.eachCountry.active} onClick={this.toggleChecked.bind(this)} />
			<a href={"/countries/"+this.props.eachCountry._id}>{this.props.eachCountry.country}</a>
			<button className="btn-cancel" onClick={this.deleteCountry.bind(this)}>&times;</button>
			</li>
			)
	}
}