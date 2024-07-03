import Command from './command.js';

class EditTaskCommand extends Command {
    constructor(taskManager, oldDescription, newDescription) {
        super();
        this.taskManager = taskManager;
        this.oldDescription = oldDescription;
        this.newDescription = newDescription;
    }

    execute() {
        this.taskManager.editTask(this.oldDescription, this.newDescription);
    }
}

export default EditTaskCommand;

