import React from 'react';




const TodoListItem = ({todo, updateTodo, deleteTodo}) => (
  <li>
    <p>{todo.title}</p>

    <button onClick={() => deleteTodo(todo.id)}>
      Delete
    </button>

    <button onClick={() => updateTodo(Object.assign({}, todo, {done: !todo.done}))}>
      {todo.done ? "Undo" : "Done"}
    </button>

  </li>
);

export default TodoListItem;
