import { combineReducers } from 'redux';
import moviesReducer from './movies';
import movieReducer from './movie';
import favouriteReducer from './favourite';
import filterReducer from './filter';
import titleReducer from './title';
import userReducer from './user';

const REDUCERS_LIST = {
  movies: moviesReducer,
  movie: movieReducer,
  favourite: favouriteReducer,
  filter: filterReducer,
  title: titleReducer,
  user: userReducer,
};

const rootReducer = combineReducers(REDUCERS_LIST);

export default rootReducer;
