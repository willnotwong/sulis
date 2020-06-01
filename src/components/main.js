import React from 'react';
import LandingPage from './landingpage';
import Technology from './technology';
import Contact from './contact';
import AboutUs from './aboutus';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
	<Switch>
		<Route exact path="/sulis" component={LandingPage} />
		<Route path ="/sulis/technology" component={Technology} />
		<Route path ="/sulis/contact" component={Contact} />
		<Route path ="/sulis/aboutus" component={AboutUs} />

	</Switch>
)

export default Main;