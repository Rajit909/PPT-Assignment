import React from 'react';

const Todo = ({ todo, dispatch }) => {
  const handleDelete = () => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  };

  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;