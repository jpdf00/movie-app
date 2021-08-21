import { CHANGE_FILTER } from '../Actions/index';

const filterReducer = (state = 'All', action) => {
  let newState = state;
  if (action.payload) {
    switch (action.type) {
      case CHANGE_FILTER:
        newState = action.payload;
        return newState;
      default:
        return newState;
    }
  }
  return newState;
};

export default filterReducer;
