import { CHANGE_FAVOURITE } from '../Actions/index';

const favouriteReducer = (state = '', action) => {
  let newState = state;
  switch (action.type) {
    case CHANGE_FAVOURITE:
      newState = action.payload;
      return newState;
    default:
      return newState;
  }
};

export default favouriteReducer;
