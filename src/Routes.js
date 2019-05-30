// Dependencies
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Login from './components/Login/Login';
import Hotpcode from './components/Hotpcode/Hotpcode';
import Notfound from './components/Notfound/Notfound';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} />
      <Route path='/hotpcode' component={Hotpcode} />
      <Route path='*' component={Notfound} />
		</Switch>
	</BrowserRouter>
)

export default Routes;