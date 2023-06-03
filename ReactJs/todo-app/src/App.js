import React, { useReducer } from 'react';
import './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload },
        ],
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      throw new Error('Unsupported action type');
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm dispatch={dispatch} />
      {state.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default App;
