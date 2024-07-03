// js/task-list.js

// Clase TaskList que maneja una lista de tareas
class TaskList {
    constructor() {
        this.tasks = [];
        this.currentId = 1; // Id inicial de las tareas
    }

    addTask(description) {
        const task = new Task(this.currentId++, description);
        this.tasks.push(task);
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    getTask(taskId) {
        return this.tasks.find(task => task.id === taskId);
    }

    getAllTasks() {
        return this.tasks;
    }
}
