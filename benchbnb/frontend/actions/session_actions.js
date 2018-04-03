import * as APIUtils from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = user => dispatch =>
  APIUtils.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    res => dispatch(receiveErrors(res.responseJSON))
  );

export const logout = () => dispatch =>
  APIUtils.logout().then(() => dispatch(receiveCurrentUser(null)));

export const signup = user => dispatch =>
  APIUtils.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    res => dispatch(receiveErrors(res.responseJSON))
  );
