// src/components/MyTasks.js
import React from 'react';
import './MyTasks.css';
import Task from './task';

const MyTasks = ({ tasks }) => {
  return (
    <div className="my-tasks">
      <h2>My tasks ({tasks.length})</h2>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default MyTasks;
