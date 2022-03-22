import editTask from './src/edit.js';
import addNewTask from './src/addlist.js';
import trashCompleted from './src/completed.js';
import check from './src/check.js';
import { getStorage, saveStorage } from './src/storage.js';

jest.mock('./src/storage.js');
jest.mock('./src/populateList.js');
jest.mock('./src/check.js');

const newTodoInput = document.createElement('input');
newTodoInput.type = 'text';
newTodoInput.value = 'read a book';

test('test the function editTask', () => {
  saveStorage([]);
  addNewTask(newTodoInput);
  const tasks = getStorage();
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.textContent = 'watch a movie';
  expect(editTask(editInput, tasks, tasks[0])).toEqual({
    description: 'watch a movie',
    completed: false,
    index: 1,
  });
});

test('test the function trashCompleted', () => {
  saveStorage([]);
  addNewTask(newTodoInput);
  addNewTask(newTodoInput);
  addNewTask(newTodoInput);
  getStorage().forEach((task) => {
    task.completed = true;
  });
  addNewTask(newTodoInput);
  trashCompleted();
  expect(getStorage().length).toBe(1);
});

describe('test the function check', () => {
  const checkbox = document.createElement('input');
  checkbox.type = checkbox;
  checkbox.checked = false;
  saveStorage([]);
  addNewTask(newTodoInput);
  addNewTask(newTodoInput);
  addNewTask(newTodoInput);
  getStorage().forEach((task) => {
    task.completed = true;
  });
  test("test the first task if it's not checked ", () => {
    const tasks = getStorage();
    check(checkbox, tasks[0]);
    expect(tasks[0].completed).toBeFalsy();
  });

  test("test the last task if it's checked ", () => {
    addNewTask(newTodoInput);
    const tasks = getStorage();
    checkbox.checked = true;
    check(checkbox, tasks[tasks.length - 1]);
    expect(tasks[tasks.length - 1].completed).toBeTruthy();
  });
});
