import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <p className="count-text">Count: {count}</p>
      <div className="button-container">
        <button onClick={decrement} className="counter-button">Decrement</button>
        <button onClick={increment} className="counter-button">Increment</button>
      </div>
    </div>
  );
};

export default App;
