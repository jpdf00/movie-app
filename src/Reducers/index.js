import { combineReducers } from 'redux';
import moviesReducer from './movies';
import movieReducer from './movie';
import filterReducer from './filter';
import titleReducer from './title';
import userReducer from './user';

const REDUCERS_LIST = {
  movies: moviesReducer,
  movie: movieReducer,
  filter: filterReducer,
  title: titleReducer,
  user: userReducer,
};

const rootReducer = combineReducers(REDUCERS_LIST);

export default rootReducer;
