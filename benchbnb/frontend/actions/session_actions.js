import * as APIUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const login = (user) => (dispatch) => (
  APIUtils.login(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
);

const logout = () => (dispatch) => (
  APIUtils.logout()
    .then(() => dispatch(receiveCurrentUser(null)))
);

const signup = (user) => (dispatch) => (
  APIUtils.signup(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
);
