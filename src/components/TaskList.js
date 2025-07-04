import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onEdit, onDelete, onToggleComplete }) {
  if (!tasks.length) return (
    <div className="empty-state">
      <span style={{fontSize: '2.5em', display: 'block', marginBottom: 10}}>🗒️</span>
      <p>No tasks yet! Add your first task above.</p>
    </div>
  );
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={() => onEdit(task)}
          onDelete={() => onDelete(task.id)}
          onToggleComplete={() => onToggleComplete(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
