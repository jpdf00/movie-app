import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesList from '../Containers/MoviesList';
import Details from '../Containers/Details';
import NotFound from './NotFound';
import Confirmation from './Confirmation';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Confirmation} />
    <Route path="/list/:page" component={MoviesList} />
    <Route path="/movies/:id" component={Details} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
