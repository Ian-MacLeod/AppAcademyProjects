import React from 'react';




const TodoListItem = ({todo, receiveTodo, removeTodo}) => (
  <li>
    <p>{todo.title}</p>

    <button onClick={() => removeTodo(todo.id)}>
      Delete
    </button>

    <button onClick={() => receiveTodo(Object.assign({}, todo, {done: !todo.done}))}>
      {todo.done ? "Undo" : "Done"}
    </button>

  </li>
);

export default TodoListItem;
