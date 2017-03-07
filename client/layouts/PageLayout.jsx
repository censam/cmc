import React from 'react';
import AccountsUI from '../AccountsUI.jsx';
export const PageLayout  = (props) => (
	<div className = "main-layout">
		<header>
			<h2>CMC Frontend</h2>
			<nav>
				<a href="/status" >Dashboard</a>
				<AccountsUI/>
			</nav>
		</header>
		
		<main className="main-layout">
		{props.children}
		</main>
	</div>
	)