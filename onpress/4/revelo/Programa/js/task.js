class TaskItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['completed'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'completed' && this.shadowRoot) {
            const text = this.shadowRoot.querySelector('.task-text');
            if (newValue === 'true') {
                text.classList.add('task-completed');
            } else {
                text.classList.remove('task-completed');
            }
        }
    }

    render() {
        const taskText = this.getAttribute('text');
        const completed = this.getAttribute('completed') === 'true';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    border-radius: 8px;
                    background-color: #f8f9fa;
                    margin-bottom: 10px;
                    padding: 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border: 1px solid #ccc;
                }
                .task-completed {
                    text-decoration: line-through;
                    color: grey;
                }
            </style>
            <span class="task-text ${completed ? 'task-completed' : ''}">${taskText}</span>
        `;
    }
}

customElements.define('task-item', TaskItem);
