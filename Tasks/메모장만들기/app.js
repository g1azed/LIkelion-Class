const taskInput = document.querySelector('#new-task');
const addTaskButton = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');
const clearAllButton = document.querySelector('#clear-all');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
  const task = {
    description: taskInput.value,
    completed: false,
  };
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
  taskInput.value = '';
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

function editTask(index) {
  const li = document.querySelectorAll('li')[index];
  const task = tasks[index];
  const input = document.createElement('input');
  input.type = 'text';
  input.value = task.description;
  li.innerHTML = '';
  li.appendChild(input);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      task.description = input.value;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
    } else if (e.key === 'Escape') {
      displayTasks();
    }
  });
  input.focus();
}

function clearAllTasks() {
  tasks = [];
  localStorage.removeItem('tasks');
  displayTasks();
}

function displayTasks() {
  taskList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''}>
      <span class="${task.completed ? 'completed' : ''}">${task.description}</span>
      <button class="edit-button">수정</button>
      <button class="delete-button">삭제</button>
    `;
    li.querySelector('.delete-button').addEventListener('click', () => deleteTask(i));
    li.querySelector('.edit-button').addEventListener('click', () => editTask(i));
    li.querySelector('input[type="checkbox"]').addEventListener('change', () => toggleComplete(i));
    taskList.appendChild(li);
  }
}

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
clearAllButton.addEventListener('click', clearAllTasks);
displayTasks();