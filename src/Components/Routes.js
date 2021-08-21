import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesList from '../Containers/MoviesList';
import FavouriteList from '../Containers/FavouriteList';
import NotFound from './NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={MoviesList} />
    <Route path="/favourites" component={FavouriteList} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
