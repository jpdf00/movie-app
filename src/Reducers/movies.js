import { CHANGE_MOVIES } from '../Actions/index';

const moviesReducer = (state = [], action) => {
  let newState = [...state];
  if (action.payload) {
    switch (action.type) {
      case CHANGE_MOVIES:
        newState = [...action.payload];
        return newState;
      default:
        return newState;
    }
  }
  return newState;
};

export default moviesReducer;
