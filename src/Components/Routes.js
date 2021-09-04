import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { changeUser } from '../Actions/index';
import MoviesList from '../Containers/MoviesList';
import Details from '../Containers/Details';
import NotFound from './NotFound';
import Login from './Login';

const Routes = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (username) => {
    dispatch(changeUser(username));
    history.push('/list/movies');
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <Login user={user} handleSubmit={handleSubmit} routerProps={props} />
        )}
      />
      {user
        ? (
          <>
            <Route path="/list/:page" component={MoviesList} />
            <Route path="/movies/:id" component={Details} />
          </>
        )
        : <Route component={Login} />}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
