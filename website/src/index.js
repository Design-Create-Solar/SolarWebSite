import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './js/components/HomePage/LandingPage';
import ProjectPage from './js/components/ProgramsPage/ProjectPage';
import MembersPage from './js/components/MembersPage/MembersPage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BottomBanner from './js/components/BottomBanner';
import ScrollToTop from './js/components/ScrollToTop';
import SponsorsPage from './js/components/SponsorsPage/SponsorsPage';
import DataPage from './js/components/DataPage/DataPage'
import './futura/futur.ttf';

import './assets/base.css';
import Main from './js/components/DataPage/DemoPages/Main';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<ScrollToTop>
					<Switch>
						<Route exact path='/' component={LandingPage} />
						<Route exact path='/home' component={LandingPage} />
						<Route path='/programs' component={ProjectPage} />
						<Route path='/team' component={MembersPage} />
						<Route path='/sponsors' component={SponsorsPage} />
						<Route path='/data' component={DataPage} />
					</Switch>
				</ScrollToTop>
				<BottomBanner />
			</div>
		</Router>
	</Provider>,

	document.getElementById('root')

	
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
