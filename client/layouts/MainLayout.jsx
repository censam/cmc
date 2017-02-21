import React from 'react';

export const MainLayout  = ({content}) => (
	<div className = "main-layout">
		<header>
			<h2>CMC Admin</h2>
			<nav>
				<a href="/" >Countries</a>
				<a href="/about" >Admin</a>
				<a href="/" >Login</a>
			</nav>
		</header>
		<main>
		{content}
		</main>
	</div>
	)