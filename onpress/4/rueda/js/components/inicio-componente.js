class InicioComponente extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos específicos del componente */
        .inicio-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .inicio-container h2 {
          color: #333;
          margin-bottom: 10px;
        }
        .inicio-container p {
          color: #666;
        }
      </style>
      <div class="inicio-container">
        <h2>Página de Inicio</h2>
        <p>Bienvenido a "Explora el Espacio", donde podrás descubrir todo sobre la exploración espacial.</p>
      </div>
    `;
  }
}

customElements.define('inicio-componente', InicioComponente);
