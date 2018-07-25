import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import navbar from './components/layout/navbar';
import home from './components/pages/home';
import staff from './components/pages/staff';
import Login from './components/auth/Login';

import './App.css';

function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-553422.oktapreview.com/oauth2/default"
          client_id="0oafor4f66sIXpTLn0h7"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <navbar />
            <div className="container">
              <Route path="/" exact={true} component={home} />
              <SecureRoute path="/staff" exact={true} component={staff} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-553422.oktapreview.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
