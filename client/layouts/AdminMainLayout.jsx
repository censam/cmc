import React from 'react';
import AccountsUI from '../AccountsUI.jsx';
export const AdminMainLayout  = (props) => (
	<div className = "main-layout">
		<header>
			<h2>CMC Admin</h2>
			<nav>
				{/* <a href="/about" >About</a> */ } 
				<AccountsUI/>
			</nav>
		</header>
		<nav className="side-nav">
		<ul>
			<li><a href="/admin/countries"><i className="fa fa-list"></i>Countries</a></li>
			<li><a href="/status"><i className="fa fa-map-o"></i>status</a></li>
			<li><a href="/shopping-list"><i className="fa fa-shopping-cart"></i>Shopping List</a></li> 
		</ul>
	</nav>
		<main className="main-layout">
		{props.children}
		</main>
	</div>
	)