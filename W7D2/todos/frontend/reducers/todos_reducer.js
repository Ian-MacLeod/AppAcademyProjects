import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import { merge } from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const defaultTodo = {
  id: null,
  body: '',
  title: '',
  done: false
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      const todos = {};
      action.todos.forEach(todo => {
        console.log(todo);
        todos[todo.id] = merge({}, defaultTodo, todo);
      });
      return todos;
    case RECEIVE_TODO:
      return merge({}, state, {
        [action.todo.id]: merge({}, defaultTodo, action.todo)
      });
    case REMOVE_TODO:
      const newState = merge({}, state);
      delete newState[action.id];
      return newState;    
    default:
      return state;
  }
};

export default todosReducer;
