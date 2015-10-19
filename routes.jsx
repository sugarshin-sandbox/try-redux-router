import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Page01 from './containers/Page01';
import Page02 from './containers/Page02';

export default (
  <Route path="/" component={App}>
    <Route path="/page1" component={Page01} />
    <Route path="/page2" component={Page02} />
  </Route>
);
