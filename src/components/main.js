import React from 'react';
import LandingPage from './landingpage';
import Technology from './technology';
import Contact from './contact';
import AboutUs from './aboutus';
import {Switch, Route} from 'react-router-dom';
import News from './news';
import Privacy from './privacy';
import Terms from './terms';

const Main = () => (
	<Switch>
		<Route exact path="/sulis" component={LandingPage} />
		<Route path ="/sulis/technology" component={Technology} />
		<Route path ="/sulis/contact" component={Contact} />
		<Route path ="/sulis/aboutus" component={AboutUs} />
		<Route path ="/sulis/news" component={News} />
		<Route path ="/sulis/privacy" component={Privacy} />
		<Route path ="/sulis/terms" component={Terms} />
	</Switch>
)

export default Main;