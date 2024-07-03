// js/task.js

// Clase Task que representa una tarea individual
class Task {
    constructor(id, description, completed = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }

    complete() {
        this.completed = true;
    }

    edit(newDescription) {
        this.description = newDescription;
    }
}
