// app.js

// Creación de una instancia de TaskList
const taskList = new TaskList();

// Referencias a elementos del DOM
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskListContainer = document.getElementById('taskList');

// Función para renderizar las tareas en la UI
function renderTasks() {
    taskListContainer.innerHTML = '';

    taskList.getAllTasks().forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item');
        taskElement.innerHTML = `
            <span class="description">${task.description}</span>
            <div class="actions">
                <button onclick="completeTask(${task.id})">Complete</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        if (task.completed) {
            taskElement.classList.add('completed');
        }
        taskListContainer.appendChild(taskElement);
    });
}

// Función para añadir una tarea
function addTask(description) {
    taskList.addTask(description);
    renderTasks();
}

// Función para eliminar una tarea
function deleteTask(taskId) {
    taskList.deleteTask(taskId);
    renderTasks();
}

// Función para completar una tarea
function completeTask(taskId) {
    const task = taskList.getTask(taskId);
    task.complete();
    renderTasks();
}

// Evento submit del formulario para añadir una tarea
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskDescription = taskInput.value.trim();
    if (taskDescription !== '') {
        addTask(taskDescription);
        taskInput.value = '';
    }
});

// Inicializar la lista de tareas en la UI
renderTasks();
