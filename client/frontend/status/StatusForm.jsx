import React, {Component} from 'react';
// import  ReactDOM from 'react-dom';	

export default class StatusForm extends Component {
	addStatus(event){
		event.preventDefault();
		var statusName = this.refs.status.value.trim();
		const statusData = [];
			statusData['title'] = statusName;
			statusData['active'] = true;
			if(statusName){
		Meteor	.call('addStatus',statusName,(error,data)=>{		
			if(error){
				Bert.alert('<H3>Please login before submitting</H3>','danger');
			}else{
				this.refs.status.value = "";
			}
		});
			}
	}
	render(){
		return(
			<form className="new-status" onSubmit={this.addStatus.bind(this)}>
				<input 
				type="text" 
				ref="status"
				placeholder="Insert Status"/>
			</form>
			)
	}
}