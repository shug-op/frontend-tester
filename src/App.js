import React, { Component } from 'react';
import LandingPage from './containers/LandingPage';
import APIRootPage from './containers/APIRootPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  BrowserRouterProps,
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={LandingPage} />
          <Route exact path="/root" render={APIRootPage}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
