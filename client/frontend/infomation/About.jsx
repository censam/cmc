import React, {Component} from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component{
	setVar(){
		Session.set('Meteor.loginButtons.dropdownVisible', true);
	}
	render(){
		DocHead.setTitle('About Us - Cast Me Club');
		DocHead.addMeta({name: "description", content: "FlowRouter SSR is Awesome"});
		return(
			<ReactCssTransitionGroup 
			transitionName="route" 
			transitionEnterTimeout={500} 
			transitionAppearTimeout={500} 
			transitionLeaveTimeout={400}
			transitionAppear={true}
			component="div"
			>
			
			<h1>About</h1>
			<p>We create holistic experiences to satisfy every digital need. Our focus is on achieving your goals through solutions that deliver results. The strategic solutions we provide enable our clients to reach new heights leveraging our expertise on all digital channels.</p>
			<p>If you make this shell script executable and then place an entry in your crontab file, hopefully this will make a decent little MySQL database backup shell script..</p>
			<button onClick={this.setVar}>Sign Up</button>
			</ReactCssTransitionGroup>
			)
	}


}