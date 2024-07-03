class TaskForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                form {
                    display: flex;
                    flex-direction: column;
                }
                input, button {
                    margin-bottom: 10px;
                    padding: 10px;
                    font-size: 16px;
                }
                button {
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #45a049;
                }
            </style>
            <form id="taskForm">
                <input type="text" id="taskTitle" placeholder="Task Title" required>
                <button type="submit">Add Task</button>
            </form>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.form = this.shadowRoot.querySelector('#taskForm');
        this.form.addEventListener('submit', this.addTask.bind(this));
    }

    addTask(event) {
        event.preventDefault();
        const taskTitle = this.shadowRoot.querySelector('#taskTitle').value;
        if (taskTitle) {
            const taskAddedEvent = new CustomEvent('task-added', {
                detail: { title: taskTitle },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(taskAddedEvent);
            this.form.reset();
        }
    }
}

customElements.define('task-form', TaskForm);
