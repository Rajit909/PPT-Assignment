import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeData = {
    theme,
    toggleTheme
  };

  return(
    <ThemeContext.Provider value={themeData}>
      {children}
    </ThemeContext.Provider>
  );
};


export default ThemeProvider;