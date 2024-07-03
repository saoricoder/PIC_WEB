class AstronautasComponente extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos específicos del componente */
        .astronautas-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .astronautas-container h2 {
          color: #333;
          margin-bottom: 10px;
        }
        .astronautas-container p {
          color: #666;
        }
      </style>
      <div class="astronautas-container">
        <h2>Astronautas Destacados</h2>
        <p>Conoce a los astronautas que han hecho historia en la exploración espacial.</p>
      </div>
    `;
  }
}

customElements.define('astronautas-componente', AstronautasComponente);
