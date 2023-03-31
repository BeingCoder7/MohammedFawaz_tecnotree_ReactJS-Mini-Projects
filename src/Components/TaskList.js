import React, { useState } from 'react';

function TaskList({ tasks, onAddTask, onCompleteTask }) {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTaskName.trim()) {
      onAddTask(newTaskName.trim());
      setNewTaskName('');
    }
  };

  return (
    <div className='tasklist'>
        <center>
        <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTaskName} onChange={(event) => setNewTaskName(event.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input type="checkbox" checked={task.completed} onChange={() => onCompleteTask(task.id)} />
              {task.name}
            </label>
          </li>
        ))}
      </ul>
      </center>
    </div>
  );
}

export default TaskList;
