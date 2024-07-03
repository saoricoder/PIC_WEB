class MisionesComponente extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos específicos del componente */
        .misiones-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .misiones-container h2 {
          color: #333;
          margin-bottom: 10px;
        }
        .misiones-container p {
          color: #666;
        }
      </style>
      <div class="misiones-container">
        <h2>Misiones Espaciales</h2>
        <p>Descubre las misiones espaciales actuales y futuras.</p>
      </div>
    `;
  }
}

customElements.define('misiones-componente', MisionesComponente);
