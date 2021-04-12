import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => (
      <div key={todo.id} onClick={() => deleteTodo(todo.id)}>{todo.content}</div>)
    )
  ) : (
    <p>No todos left</p>
  );
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;