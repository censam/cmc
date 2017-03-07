import React from 'react';
import  ReactDOM from 'react-dom';


import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

import {AdminMainLayout} from './layouts/AdminMainLayout.jsx';
import {MainLayout} from './layouts/MainLayout.jsx';
import {PageLayout} from './layouts/PageLayout.jsx';
import CountriesWrapper from './admin/countries/CountriesWrapper.jsx';
import StatusWrapper from './frontend/status/StatusWrapper.jsx';
import StatusDetail from './frontend/status/StatusDetail.jsx';
import About from './frontend/infomation/About.jsx';

export  const Routes = () => (
	<Router history = {browserHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRoute component={StatusWrapper} />
			<Route path="/status" component={StatusWrapper} /> 
		</Route>

		<Route path="/about" component={PageLayout}>
			<IndexRoute component={About} /> 
		</Route>

		<Route path="/admin/countries" component={AdminMainLayout}>
			<IndexRoute component={CountriesWrapper} /> 
		</Route>

		



	</Router> 
);


Meteor.startup(() => {
	ReactDOM.render(<Routes />,document.getElementById("app"));
  // code to run on server at startup
});
