import Command from './command.js';

class AddTaskCommand extends Command {
    constructor(taskManager, task) {
        super();
        this.taskManager = taskManager;
        this.task = task;
    }

    execute() {
        this.taskManager.addTask(this.task);
    }
}

export default AddTaskCommand;


