class CreateTask extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          form {
            display: flex;
            flex-direction: column;
          }
          input, button {
            margin: 5px 0;
            padding: 10px;
          }
        </style>
        <form>
          <input type="text" placeholder="Nueva tarea">
          <button type="button">Agregar Tarea</button>
        </form>
      `;
    }
  
    connectedCallback() {
      this.shadowRoot.querySelector('button').addEventListener('click', () => this.addTask());
    }
  
    addTask() {
      const input = this.shadowRoot.querySelector('input');
      const event = new CustomEvent('taskAdded', {
        detail: input.value,
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
      input.value = '';
    }
  }
  
  customElements.define('create-task', CreateTask);
  