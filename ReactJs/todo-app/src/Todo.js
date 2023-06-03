import React from 'react';

const Todo = ({ todo, dispatch }) => {
  const handleDelete = () => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  };

  return (
    <div className="todo">
      <span className="todo-text">{todo.text}</span>
      <button onClick={handleDelete} className="delete-button">Delete</button>
    </div>
  );
};

export default Todo;
