document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.querySelector('task-list');
    const createTask = document.querySelector('create-task');
  
    createTask.addEventListener('taskAdded', (event) => {
      taskList.addTask(event.detail);
    });
  });
  