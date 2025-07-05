import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// For testing

// const sampleTasks = [
//   {
//     id: 1,
//     title: "Complete React assignment",
//     description: "Build a task tracker application",
//     completed: false,
//     createdAt: "2024-01-15T10:00:00Z"
//   },
//   {
//     id: 2,
//     title: "Review JavaScript concepts",
//     description: "Go through ES6+ features",
//     completed: true,
//     createdAt: "2024-01-14T15:30:00Z"
//   }
// ];
// const username = localStorage.getItem('username');
// if (username) {
//   localStorage.setItem(`tasks_${username}`, JSON.stringify(sampleTasks));
//   window.location.reload();
// } else {
//   alert('Please log in first!');
// }