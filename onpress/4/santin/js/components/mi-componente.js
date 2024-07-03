class MiComponente extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos específicos del componente */
        </style>
        <div>
          <h2>Mi Componente</h2>
          <p>Este es un Web Component personalizado.</p>
        </div>
      `;
    }
  }
  
  customElements.define('mi-componente', MiComponente);
  