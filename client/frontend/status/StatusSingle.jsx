import React, {Component} from 'react';
// import  ReactDOM from 'react-dom';

export default class StatusSingle extends Component{
	toggleChecked(){
			Meteor	.call('toggleStatus',this.props.eachStatus);
	}
	deleteStatus(){
			Meteor	.call('delStatus',this.props.eachStatus);
	}
	render(){
		const resolutionClass = this.props.eachStatus.active ? "checked" : "";
		const checkActive = this.props.eachStatus.active ? <span className="completed">Completed</span>: "";
		return(
			<li className={resolutionClass}>
			<input type="checkbox"  readOnly={true} checked={this.props.eachStatus.active} onClick={this.toggleChecked.bind(this)} />
		           <a href={"/status/"+this.props.eachStatus._id}></a>{this.props.eachStatus.title} {checkActive}
			<button className="btn-cancel" onClick={this.deleteStatus.bind(this)}>&times;</button>
			</li>
			)
	}
}