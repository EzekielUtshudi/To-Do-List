import { saveStorage } from './storage.js';

const editTask = (text, tasks, task) => {
  const taskIndex = task.index;
  const taskToEdit = tasks[taskIndex - 1];

  taskToEdit.description = text.textContent;
  saveStorage(tasks);
  return taskToEdit;
};

export default editTask;
