class TaskList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    background: #f9f9f9;
                    margin: 5px 0;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    display: flex;
                    justify-content: space-between;
                }
                button {
                    background-color: #e74c3c;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    padding: 5px 10px;
                }
                button:hover {
                    background-color: #c0392b;
                }
            </style>
            <ul id="taskList"></ul>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.taskList = this.shadowRoot.querySelector('#taskList');
        this.addEventListener('task-added', this.addTaskToList.bind(this));
    }

    addTaskToList(event) {
        const task = event.detail;
        const li = document.createElement('li');
        li.textContent = task.title;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteButton);
        this.taskList.appendChild(li);
    }
}

customElements.define('task-list', TaskList);
