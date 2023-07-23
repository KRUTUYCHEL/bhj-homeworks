
const tasksForm = document.getElementById('tasks__form');
const tasksList = document.getElementById('tasks__list');
tasksForm.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
window.addEventListener('load', loadTasks);

function addTask(event) {
  event.preventDefault();
  const taskInput = document.getElementById('task__input');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = taskText;
    const removeButton = document.createElement('a');
    removeButton.classList.add('task__remove');
    removeButton.innerHTML = '&times;';
    taskElement.appendChild(taskTitle);
    taskElement.appendChild(removeButton);
    tasksList.appendChild(taskElement);
    taskInput.value = '';
    saveTasks();
  }
}

function deleteTask(event) {
  if (event.target.classList.contains('task__remove')) {
    const taskElement = event.target.closest('.task');
    taskElement.remove();
    saveTasks();
  }
}
function saveTasks() {
  const tasks = Array.from(tasksList.children).map(taskElement => {
    return taskElement.querySelector('.task__title').textContent;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    tasks.forEach(taskText => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      const taskTitle = document.createElement('div');
      taskTitle.classList.add('task__title');
      taskTitle.textContent = taskText;
      const removeButton = document.createElement('a');
      removeButton.classList.add('task__remove');
      removeButton.innerHTML = '&times;';
      taskElement.appendChild(taskTitle);
      taskElement.appendChild(removeButton);
      tasksList.appendChild(taskElement);
    });
  }
}