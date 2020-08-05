import React from 'react';
import Home from './components/Home.js';
import Login from './components/UpDate/Login.js';
import UpDate from './components/UpDate/UpDate.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AuthContextProvider from './context/AuthContext.js';
import PrivateRoute from './PrivateRoute.js';

const App = () => {

		return(
				<AuthContextProvider>
				<BrowserRouter>
						<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/login' component={Login}/>
						<PrivateRoute path='/update' component={UpDate}/>
						<Route render={() => <h1>404: page not found</h1>} />
						</Switch>
				</BrowserRouter>	
				</AuthContextProvider>
		)
}
export default App;
