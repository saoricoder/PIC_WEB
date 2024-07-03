class TaskList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.tasks = [];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    border-radius: 12px;
                    border: 2px solid #ccc;
                    padding: 20px;
                    margin-bottom: 20px;
                    background-color: #fff;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    padding: 12px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }
                .task-completed {
                    text-decoration: line-through;
                    color: #6c757d;
                }
                button {
                    padding: 8px 16px;
                    cursor: pointer;
                    border: none;
                    border-radius: 4px;
                    transition: background-color 0.3s ease;
                }
                button.complete {
                    background-color: #28a745;
                    color: white;
                }
                button.delete {
                    background-color: #dc3545;
                    color: white;
                }
                button:hover {
                    opacity: 0.8;
                }
                .input-container {
                    margin-top: 20px;
                    display: flex;
                }
                #newTask {
                    flex-grow: 1;
                    padding: 12px;
                    font-size: 16px;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                }
                #addTaskBtn {
                    padding: 12px 24px;
                    font-size: 16px;
                    margin-left: 10px;
                }
            </style>
            <table>
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.tasks.map((task, index) => `
                        <tr>
                            <td><task-item text="${task.text}" completed="${task.completed}"></task-item></td>
                            <td>
                                <button class="complete" data-index="${index}">Completar</button>
                                <button class="delete" data-index="${index}">Eliminar</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="input-container">
                <input type="text" id="newTask" placeholder="Nueva tarea">
                <button id="addTaskBtn">Agregar Tarea</button>
            </div>
        `;

        this.shadowRoot.querySelectorAll('button.complete').forEach(button => {
            button.addEventListener('click', (event) => this.toggleComplete(event.target.dataset.index));
        });

        this.shadowRoot.querySelectorAll('button.delete').forEach(button => {
            button.addEventListener('click', (event) => this.removeTask(event.target.dataset.index));
        });

        this.shadowRoot.querySelector('#addTaskBtn').addEventListener('click', () => this.addTask());
    }

    toggleComplete(index) {
        const task = this.tasks[index];
        task.completed = !task.completed;
        this.render();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.render();
    }

    addTask() {
        const input = this.shadowRoot.querySelector('#newTask');
        const taskText = input.value.trim();

        if (taskText) {
            this.tasks.push({ text: taskText, completed: false });
            input.value = '';
            this.render();
        }
    }
}

customElements.define('task-list', TaskList);
