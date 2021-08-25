import { CHANGE_MOVIE } from '../Actions/index';

const movieReducer = (state = [], action) => {
  let newState = [...state];
  if (action.payload) {
    switch (action.type) {
      case CHANGE_MOVIE:
        newState = [...action.payload];
        return newState;
      default:
        return newState;
    }
  }
  return newState;
};

export default movieReducer;
