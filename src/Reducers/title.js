import { CHANGE_TITLE } from '../Actions/index';

const titleReducer = (state = '', action) => {
  let newState = state;
  if (action.payload) {
    switch (action.type) {
      case CHANGE_TITLE:
        newState = action.payload;
        return newState;
      default:
        return newState;
    }
  }
  return newState;
};

export default titleReducer;
