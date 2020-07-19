import React from 'react';
import Home from './components/Home.js';
import UpDate from './components/UpDate/UpDate.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {

		return(
				<BrowserRouter>
						<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/update' component={UpDate}/>
						<Route render={() => <h1>404: page not found</h1>} />
						</Switch>
				</BrowserRouter>						
		)
}
export default App;
