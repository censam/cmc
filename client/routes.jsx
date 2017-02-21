import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import CountriesWrapper from './countries/CountriesWrapper.jsx';

FlowRouter.route('/',{
	action(){
		mount(MainLayout,{
			content:(<CountriesWrapper />)
		}

		)
	}

});