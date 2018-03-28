export const fetchTodos = () => (
  $.ajax({
    url: "api/todos",
    method: "get",
    dataType: "json"
  })
);

export const createTodo = (todoParams) => (
  $.ajax({
    url: "api/todos",
    method: "post",
    dataType: "json",
    data: {todo: todoParams}
  })
);

export const updateTodo = (todoParams) => (
  $.ajax({
    url: `api/todos/${todoParams.id}`,
    method: "patch",
    dataType: "json",
    data: {todo: todoParams}
  })
);

export const deleteTodo = (id) => (
  $.ajax({
    url: `api/todos/${id}`,
    method: "delete",
    dataType: "json",
  })
);
