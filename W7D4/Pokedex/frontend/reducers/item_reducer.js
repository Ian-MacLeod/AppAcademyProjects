import { RECEIVE_ITEMS } from "../actions/item_actions";

const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITEMS:
      return Object.assign({}, state, action.items);
    default:
      return state;
  }
};

export default itemReducer;
