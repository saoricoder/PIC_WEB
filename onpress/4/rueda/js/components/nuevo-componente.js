class NuevoComponente extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos específicos del componente */
        .nuevo-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .nuevo-container h2 {
          color: #333;
          margin-bottom: 10px;
        }
        .nuevo-container p {
          color: #666;
        }
      </style>
      <div class="nuevo-container">
        <h2>Nueva Tecnología Espacial</h2>
        <p>Explora la tecnología emergente en el campo de la exploración espacial.</p>
      </div>
    `;
  }
}

customElements.define('nuevo-componente', NuevoComponente);
