import React from 'react';
import LandingPage from './landingpage';
import Technology from './technology';
import Contact from './contact';
import AboutUs from './aboutus';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
	<Switch>
		<Route exact path="/sulis" component={LandingPage} />
		<Route path ="/technology" component={Technology} />
		<Route path ="/contact" component={Contact} />
		<Route path ="/aboutus" component={AboutUs} />

	</Switch>
)

export default Main;