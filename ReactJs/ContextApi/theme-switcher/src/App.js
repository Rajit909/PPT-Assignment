import React from 'react';
import Dashboard from './Dashboard';
import ThemeProvider from './ThemeProvider';



function App() {
  return (
   <>
      <ThemeProvider>
        <Dashboard/>
      </ThemeProvider>
   </>
  );
}

export default App;
