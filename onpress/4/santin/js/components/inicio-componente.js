class InicioComponente extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos específicos del componente */
        </style>
        <div>
          <h2>Página de Inicio</h2>
          <p>Bienvenido a la página de inicio.</p>
        </div>
      `;
    }
  }
  
  customElements.define('inicio-componente', InicioComponente);
  