import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/root_reducer";

const configureStore = () =>
  createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

export default configureStore;
