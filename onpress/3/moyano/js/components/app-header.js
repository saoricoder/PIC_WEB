class AppHeader extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          header {
            background-color: #4CAF50;
            padding: 10px;
            text-align: center;
            color: white;
            font-size: 20px;
          }
        </style>
        <header>
          <h1>Gestión de Tareas</h1>
        </header>
      `;
    }
  }
  
  customElements.define('app-header', AppHeader);
  