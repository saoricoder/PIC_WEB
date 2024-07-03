class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.filters = [];
    }

    addFilter(filter) {
        this.filters.push(filter);
    }

    executeFilters(request) {
        for (const filter of this.filters) {
            filter.execute(request);
        }
    }

    addTask(task) {
        const request = { type: 'ADD_TASK', task };
        try {
            this.executeFilters(request);
            this.tasks.push(task);
            this.saveTasks();
            this.renderTasks();
        } catch (error) {
            console.error(error.message);
        }
    }

    deleteTask(taskDescription) {
        const request = { type: 'DELETE_TASK', taskDescription };
        try {
            this.executeFilters(request);
            this.tasks = this.tasks.filter(task => task.description !== taskDescription);
            this.saveTasks();
            this.renderTasks();
        } catch (error) {
            console.error(error.message);
        }
    }

    editTask(oldDescription, newDescription) {
        const request = { type: 'EDIT_TASK', oldDescription, newDescription };
        try {
            this.executeFilters(request);
            const task = this.tasks.find(task => task.description === oldDescription);
            if (task) {
                task.description = newDescription;
                this.saveTasks();
                this.renderTasks();
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    renderTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = this.tasks.map(task => `
            <div class="list-group-item d-flex justify-content-between align-items-center">
                <span id="task-${task.description}" class="task">${task.description}</span>
                <div>
                    <button id="edit-${task.description}" class="btn btn-secondary btn-sm mr-2" onclick="enableEditTask('${task.description}')">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteTask('${task.description}')">Delete</button>
                </div>
            </div>`).join('');
    }
}

export default TaskManager;
