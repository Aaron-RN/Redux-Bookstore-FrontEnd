import { TOGGLE_MODAL } from '../actions/index';

const modalReducer = (state = false, action) => {
  console.log(state);
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
};

export default modalReducer;
