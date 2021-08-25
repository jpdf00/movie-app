import { combineReducers } from 'redux';
import movieReducer from './movie';
import filterReducer from './filter';
import titleReducer from './title';

const REDUCERS_LIST = {
  movies: movieReducer,
  filter: filterReducer,
  title: titleReducer,
};

const rootReducer = combineReducers(REDUCERS_LIST);

export default rootReducer;
