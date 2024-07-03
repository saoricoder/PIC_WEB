import Command from './command.js';

class DeleteTaskCommand extends Command {
    constructor(taskManager, taskDescription) {
        super();
        this.taskManager = taskManager;
        this.taskDescription = taskDescription;
    }

    execute() {
        this.taskManager.deleteTask(this.taskDescription);
    }
}

export default DeleteTaskCommand;

