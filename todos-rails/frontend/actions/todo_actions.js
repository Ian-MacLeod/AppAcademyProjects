import * as APIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});

export const fetchTodos = () => (dispatch) => (
  APIUtil.fetchTodos().then((todos) => dispatch(receiveTodos(todos)))
);

export const createTodo = (todoParams) => (dispatch) => (
  APIUtil.createTodo(todoParams).then(
    (todo) => {
      dispatch(receiveTodo(todo));
      dispatch(clearErrors());
    },
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
);

export const updateTodo = (todoParams) => (dispatch) => (
  APIUtil.updateTodo(todoParams).then(
    (result) => {
      dispatch(receiveTodo(result));
      dispatch(clearErrors());
    },
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
);

export const deleteTodo = (id) => (dispatch) => (
  APIUtil.deleteTodo(id).then(
    () => {
      dispatch(removeTodo(id));
      dispatch(clearErrors());
    },
    (err) => dispatch(receiveErrors(err.responseJSON || ["There is a problem deleting todo"]))
  )
);
