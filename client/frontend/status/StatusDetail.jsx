import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class StatusDetail extends TrackerReact(React.Component){
	constructor(){
		super();
		this.state = {
			subscription:{
				status:Meteor.subscribe('userStatus')
			}
		}
	}
	eachStatus(){
	 return Status.findOne(this.props.id);
	}
	render(){
		
		let statusEach=this.eachStatus();
		if(!statusEach){
			return (
				<div>
			<h1>Loading</h1>
			</div>
				)
		}
		return(
			<div>
			<h1>{this.eachStatus().title}</h1>
			</div>
			)

	
	}


}