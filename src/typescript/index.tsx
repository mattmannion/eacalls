import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// component imports
import App from './app';
import Header from './static/header';

render(
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
);
