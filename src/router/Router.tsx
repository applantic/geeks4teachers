import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from 'views/Home/Home';

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={'/construction'} component={Home}/>
				<Route path={'/new-volunteer'} component={Home}/>
				<Route path={'/'} component={Home}/>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
