import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../../components/header';
import { HomePage, CartPage } from '../pages';
import { withBookstoreService } from '../../components/hoc';

import './app.css';

class App extends Component {
  render() {
    return (
      <main role="main" className="container">
        <Header numItems = {5} total = {20} />
        <Switch>
          <Route
            path="/"
            component = {HomePage}
            exact />

            <Route
              path="/cart"
              component = {CartPage}
              />
        </Switch>
      </main>
    );
  }
}

export default withBookstoreService()(App);
