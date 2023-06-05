import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [token, setToken] = useState(null);
  const [tasks, setTasks] = useState([]);

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleTaskSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

  return (
    <Router>
      <div>
        <Route path="/login">
          {token ? (
            <Redirect to="/dashboard" />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </Route>
        <PrivateRoute
          path="/dashboard"
          component={() => (
            <div>
              <h2>Task Dashboard</h2>
              <TaskForm onSubmit={handleTaskSubmit} />
              <TaskList tasks={tasks} />
            </div>
          )}
        />
      </div>
    </Router>
  );
};

export default App;