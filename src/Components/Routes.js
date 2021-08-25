import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesList from '../Containers/MoviesList';
import Details from '../Containers/Details';
import NotFound from './NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={NotFound} />
    <Route exact path="/list/:page" component={MoviesList} />
    <Route exact path="/movies/:id" component={Details} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
