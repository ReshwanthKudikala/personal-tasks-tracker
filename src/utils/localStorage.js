export function getUsername() {
  return localStorage.getItem('username');
}

export function setUsername(username) {
  localStorage.setItem('username', username);
}

export function getTasks(username) {
  if (!username) return [];
  const tasks = localStorage.getItem(`tasks_${username}`);
  return tasks ? JSON.parse(tasks) : [];
}

export function setTasks(username, tasks) {
  if (!username) return;
  localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
} 