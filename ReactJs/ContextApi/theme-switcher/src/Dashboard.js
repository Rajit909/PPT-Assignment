import React, {useContext} from 'react'
import ThemeContext from './ThemeContext'

const Dashboard = () => {

  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <div className={`dashboard ${theme}`}>
      <h1>Dashboard</h1>
      <button onClick={toggleTheme}>
          { theme === 'light' ? 'Switch to Dark Mode' : 'Switch to light Mode' }
      </button>
    </div>
  )
}

export default Dashboard