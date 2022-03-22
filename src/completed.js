import { saveStorage, getStorage } from './storage.js';

const trashCompleted = () => {
  const storedTasks = getStorage();

  const uncompletedTask = storedTasks.filter(
    (task) => task.completed === false,
  );
  saveStorage(uncompletedTask);
};

export default trashCompleted;
