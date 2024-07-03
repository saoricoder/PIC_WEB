class ExploracionesComponente extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos específicos del componente */
        .exploraciones-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .exploraciones-container h2 {
          color: #333;
          margin-bottom: 10px;
        }
        .exploraciones-container p {
          color: #666;
        }
      </style>
      <div class="exploraciones-container">
        <h2>Exploraciones Espaciales</h2>
        <p>Descubre las últimas exploraciones al espacio exterior.</p>
      </div>
    `;
  }
}

customElements.define('exploraciones-componente', ExploracionesComponente);
