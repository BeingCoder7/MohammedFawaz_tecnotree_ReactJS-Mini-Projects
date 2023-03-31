import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskName) => {
    const newTask = {
      id: Math.floor(Math.random() * 100000),
      name: taskName,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <center>
      <TaskList tasks={tasks} onAddTask={handleAddTask} onCompleteTask={handleCompleteTask} />
      </center>
    </div>
  );
}

export default TodoList;
