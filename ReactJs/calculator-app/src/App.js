import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleNumberClick = (number) => {
    if (displayValue === '0' || waitingForSecondOperand) {
      setDisplayValue(number);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleDecimalClick = () => {
    if (waitingForSecondOperand) return;
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleOperatorClick = (op) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplayValue(result);
      setFirstOperand(result);
    }

    setOperator(op);
    setWaitingForSecondOperand(true);
  };

  const performCalculation = () => {
    const inputValue = parseFloat(displayValue);

    if (operator === '+') {
      return firstOperand + inputValue;
    } else if (operator === '-') {
      return firstOperand - inputValue;
    } else if (operator === '*') {
      return firstOperand * inputValue;
    } else if (operator === '/') {
      return firstOperand / inputValue;
    }

    return inputValue;
  };

  const handleEqualClick = () => {
    if (operator && !waitingForSecondOperand) {
      const result = performCalculation();
      setDisplayValue(result);
      setFirstOperand(result);
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-display">{displayValue}</div>
      <div className="calculator-buttons">
        <button onClick={handleNumberClick.bind(null, '7')}>7</button>
        <button onClick={handleNumberClick.bind(null, '8')}>8</button>
        <button onClick={handleNumberClick.bind(null, '9')}>9</button>
        <button onClick={handleOperatorClick.bind(null, '/')}>/</button>
        <button onClick={handleNumberClick.bind(null, '4')}>4</button>
        <button onClick={handleNumberClick.bind(null, '5')}>5</button>
        <button onClick={handleNumberClick.bind(null, '6')}>6</button>
        <button onClick={handleOperatorClick.bind(null, '*')}>*</button>
        <button onClick={handleNumberClick.bind(null, '1')}>1</button>
        <button onClick={handleNumberClick.bind(null, '2')}>2</button>
        <button onClick={handleNumberClick.bind(null, '3')}>3</button>
        <button onClick={handleOperatorClick.bind(null, '-')}>-</button>
        <button onClick={handleNumberClick.bind(null, '0')}>0</button>
        <button onClick={handleDecimalClick}>.</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={handleOperatorClick.bind(null, '+')}>+</button>
        <button onClick={handleClearClick} className="clear-button">C</button>
      </div>
    </div>
  );
};

export default App;
