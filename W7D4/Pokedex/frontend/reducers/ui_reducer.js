import { combineReducers } from "redux";
import errorReducer from "./error_reducer";

export default combineReducers({
  errors: errorReducer
});
