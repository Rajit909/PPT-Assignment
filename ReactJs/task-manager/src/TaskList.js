import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h3>Task List</h3>
      {tasks.map((task, index) => (
        <div key={index}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;