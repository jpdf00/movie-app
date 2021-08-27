import { LOG_IN } from '../Actions/index';

const userReducer = (state = '', action) => {
  let newState = state;
  switch (action.type) {
    case LOG_IN:
      newState = action.payload;
      return newState;
    default:
      return newState;
  }
};

export default userReducer;
