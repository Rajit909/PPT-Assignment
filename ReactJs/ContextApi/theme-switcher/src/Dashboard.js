import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Dashboard = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
      <div className={`dashboard ${theme}`}>
        <h1>Dashboard</h1>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        </button>
      </div>
    );
  };
  
  export default Dashboard;
  