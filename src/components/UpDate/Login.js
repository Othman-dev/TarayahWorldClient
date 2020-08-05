import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import firebase from '../../Firebase/firebase.js';
import {AuthContext} from '../../context/AuthContext.js';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/update");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const {currentUser} = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/update" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
