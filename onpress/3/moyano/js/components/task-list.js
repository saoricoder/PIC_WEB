class TaskList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.tasks = [];
      this.shadowRoot.innerHTML = `
        <style>
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            background: #f9f9f9;
            margin: 5px 0;
            padding: 10px;
            border: 1px solid #ddd;
          }
        </style>
        <ul></ul>
      `;
    }
  
    connectedCallback() {
      this.render();
    }
  
    addTask(task) {
      this.tasks.push(task);
      this.render();
    }
  
    render() {
      const ul = this.shadowRoot.querySelector('ul');
      ul.innerHTML = this.tasks.map(task => `<li>${task}</li>`).join('');
    }
  }
  
  customElements.define('task-list', TaskList);
  