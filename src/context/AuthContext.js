import React, {createContext, useState, useEffect} from 'react';
import firebase from '../Firebase/firebase.js';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

		const [currentUser, setCurrentUser] = useState(null);

		useEffect(() => {
				firebase.auth().onAuthStateChanged((user) => setCurrentUser(user));
		}, []);

		return (

				<AuthContext.Provider value={{currentUser}}>
				{props.children}
				</AuthContext.Provider>

		);
};
export default AuthContextProvider
