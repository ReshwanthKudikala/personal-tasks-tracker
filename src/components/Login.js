import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim());
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo" aria-label="Task Manager">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="10" y="8" width="28" height="36" rx="4" fill="#1976d2"/>
          <rect x="16" y="4" width="16" height="8" rx="2" fill="#fff"/>
          <rect x="18" y="20" width="12" height="2" rx="1" fill="#fff"/>
          <rect x="18" y="26" width="12" height="2" rx="1" fill="#fff"/>
          <rect x="18" y="32" width="8" height="2" rx="1" fill="#fff"/>
        </svg>
      </div>
      <h2>Login</h2>
      <div className="login-subtitle">
        Welcome! Organize your day, boost your productivity, and never miss a task.
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="login-footer">© 2024 Your Name</div>
    </div>
  );
}

export default Login;
