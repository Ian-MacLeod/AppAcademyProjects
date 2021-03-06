import { RECEIVE_POKEMON_ERRORS } from "../actions/error_actions";

const errorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POKEMON_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default errorReducer;
