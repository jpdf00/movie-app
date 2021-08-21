import { combineReducers } from 'redux';
import movieReducer from './movie';
import filterReducer from './filter';
import favouriteReducer from './favourite';

const REDUCERS_LIST = {
  movie: movieReducer,
  filter: filterReducer,
  favourite: favouriteReducer,
};

const rootReducer = combineReducers(REDUCERS_LIST);

export default rootReducer;
