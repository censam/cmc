/*import React from 'react';
import {mount} from 'react-mounter';
import {AdminMainLayout} from './layouts/AdminMainLayout.jsx';
import {MainLayout} from './layouts/MainLayout.jsx';
import {PageLayout} from './layouts/PageLayout.jsx';
import CountriesWrapper from './admin/countries/CountriesWrapper.jsx';
import StatusWrapper from './frontend/status/StatusWrapper.jsx';
import StatusDetail from './frontend/status/StatusDetail.jsx';
import About from './frontend/infomation/About.jsx';



FlowRouter.route('/admin/countries',{
	action(){
		mount(AdminMainLayout,{
			content:(<CountriesWrapper />)
		}

		)
	}

});

FlowRouter.route('/status',{
	action(){
		mount(MainLayout,{
			content:(<StatusWrapper />)
		}

		)
	}

});

FlowRouter.route('/about',{
	action(){
		mount(PageLayout,{
			content:(<About />)
		}

		)
	}

});

FlowRouter.route('/status/:id',{
	action(params){
		mount(PageLayout,{
			content:(<StatusDetail id={params.id}/>)
		}

		)
	}

});
*/