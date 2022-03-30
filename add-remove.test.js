import trashTask from './src/trashTask.js';
import addNewTask from './src/addlist.js';
import { getStorage, saveStorage } from './src/storage.js';

jest.mock('./src/storage.js');
jest.mock('./src/populateList.js');
const newTodoInput = document.createElement('input');
newTodoInput.type = 'text';
newTodoInput.value = 'read a book';

describe('Testing the addNewTask function', () => {
  test('test the function addList', () => {
    saveStorage([]);
    expect(addNewTask(newTodoInput)).toEqual({
      description: 'read a book',
      completed: false,
      index: 1,
    });
  });

  test('Test adding and getting items from the storage ', () => {
    const newTodoInput = document.createElement('input');
    newTodoInput.type = 'text';
    newTodoInput.value = 'watch a movie';
    saveStorage([]);
    addNewTask(newTodoInput);
    expect(getStorage()).toEqual([
      {
        description: 'watch a movie',
        completed: false,
        index: 1,
      },
    ]);
  });

  test('Test creating the elements "Dom" after adding new tasks', () => {
    saveStorage([]);
    addNewTask(newTodoInput);
    addNewTask(newTodoInput);
    addNewTask(newTodoInput);
    const items = Array.from(document.querySelectorAll('.list-item')).length;
    expect(items).toBe(3);
  });
});

test('test the function trashTask', () => {
  saveStorage([]);
  addNewTask(newTodoInput);
  addNewTask(newTodoInput);
  trashTask(1);
  expect(getStorage().length).toBe(1);
  trashTask(0);
  expect(getStorage().length).toBe(0);
});
