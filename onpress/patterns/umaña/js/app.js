import TaskManager from './taskManager.js';
import { AuthenticationFilter, LoggingFilter } from './filters/interceptingFilter.js';
import AddTaskCommand from './command/addTaskCommand.js';
import DeleteTaskCommand from './command/deleteTaskCommand.js';
import EditTaskCommand from './command/editTaskCommand.js';

document.addEventListener('DOMContentLoaded', () => {
    const taskManager = new TaskManager();
    
    const authFilter = new AuthenticationFilter();
    const logFilter = new LoggingFilter();

    taskManager.addFilter(authFilter);
    taskManager.addFilter(logFilter);

    document.getElementById('add-task').addEventListener('click', () => {
        const taskDescription = document.getElementById('new-task').value;
        if (taskDescription) {
            const addTaskCommand = new AddTaskCommand(taskManager, { description: taskDescription });
            addTaskCommand.execute();
            document.getElementById('new-task').value = '';
        }
    });

    taskManager.renderTasks();
});

window.deleteTask = (taskDescription) => {
    const taskManager = new TaskManager();
    const deleteTaskCommand = new DeleteTaskCommand(taskManager, taskDescription);
    deleteTaskCommand.execute();
};

window.enableEditTask = (taskDescription) => {
    const taskElement = document.getElementById(`task-${taskDescription}`);
    const editButton = document.getElementById(`edit-${taskDescription}`);
    taskElement.setAttribute('contenteditable', 'true');
    taskElement.focus();
    editButton.innerText = 'Save';
    editButton.setAttribute('onclick', `saveTask('${taskDescription}', this.previousElementSibling.innerText)`);
};

window.saveTask = (oldDescription, newDescription) => {
    const taskManager = new TaskManager();
    const editTaskCommand = new EditTaskCommand(taskManager, oldDescription, newDescription);
    editTaskCommand.execute();
};
