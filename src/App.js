import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { getUsername, setUsername, getTasks, setTasks } from './utils/localStorage';

function App() {
  const [username, setUsernameState] = useState(getUsername());
  const [tasks, setTasksState] = useState(() => getTasks(getUsername()));
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (username) setTasks(username, tasks);
  }, [tasks, username]);

  const handleLogin = (name) => {
    setUsername(name);
    setUsernameState(name);
    setTasksState(getTasks(name)); // Load this user's tasks
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsernameState(null);
    setTasksState([]); // Clear tasks from state
  };

  const handleAddTask = (task) => {
    setTasksState([
      ...tasks,
      {
        ...task,
        id: Date.now(),
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const handleEditTask = (id, updatedTask) => {
    setTasksState(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
    setEditingTask(null);
  };

  const handleDeleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasksState(tasks.filter(task => task.id !== id));
    }
  };

  const handleToggleComplete = (id) => {
    setTasksState(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Filtering logic
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const counts = {
    all: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
  };

  if (!username) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
      <div className="welcome-message">Welcome, {username}!</div>
      <TaskForm onAddTask={handleAddTask} editingTask={editingTask} onEditTask={handleEditTask} />
      <TaskFilter filter={filter} setFilter={setFilter} counts={counts} />
      <TaskList
        tasks={filteredTasks}
        onEdit={setEditingTask}
        onDelete={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
}

export default App;
