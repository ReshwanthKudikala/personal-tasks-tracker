import React from 'react';

function TaskItem({ task, onEdit, onDelete, onToggleComplete }) {
  return (
    <li className={`task-item${task.completed ? ' completed' : ''}`}>
      <div className="task-main">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggleComplete}
        />
        <span className="task-title">{task.title}</span>
        {task.description && <span className="task-desc"> - {task.description}</span>}
      </div>
      <div className="task-meta">
        <span className="task-date">{new Date(task.createdAt).toLocaleString()}</span>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
