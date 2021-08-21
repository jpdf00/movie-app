import { CHANGE_FAVOURITE } from '../Actions/index';

const favouriteReducer = (state = [], action) => {
  let newState = { ...state };
  if (action.payload) {
    switch (action.type) {
      case CHANGE_FAVOURITE:
        newState = action.payload;
        return newState;
      default:
        return newState;
    }
  }
  return newState;
};

export default favouriteReducer;
