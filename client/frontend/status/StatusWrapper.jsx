import  React from 'react';
import  ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

import StatusForm from './StatusForm.jsx';
import StatusSingle from './StatusSingle.jsx';

Status = new Mongo.Collection('status');

export default class StatusWrapper extends TrackerReact(React.Component){
	constructor(){
		super();
		this.state = {
			subscription:{
				status:Meteor.subscribe('userStatus')
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.status.stop();
	}
	status(){
		return Status.find().fetch();
	}

	render() {
			let statusView = this.status();	
		{	if(statusView.length == 0){
				return (
					<div>
					<h1>Status</h1>
					<StatusForm/>
					</div>
					);
			} }
		return(
			<ReactCssTransitionGroup 
			transitionName="route" 
			transitionEnterTimeout={500} 
			transitionAppearTimeout={500} 
			transitionLeaveTimeout={400}
			transitionAppear={true}
			component="div"
			>
			<h1>Status</h1>
			<StatusForm/>
			<ul className="status">
			<ReactCssTransitionGroup transitionName="resolutionLoad" transitionEnterTimeout={500} transitionLeaveTimeout={400}>
			{this.status().map( (status)=>{
			return <StatusSingle key={status._id} eachStatus={status}/>
			})}
			</ReactCssTransitionGroup>
			</ul>
			</ReactCssTransitionGroup>
			)
	}
	
}
