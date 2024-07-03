class CarritoComponente extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilos específicos del componente */
        </style>
        <div>
          <h2>Carrito de Compras</h2>
          <p>Aquí está tu carrito de compras.</p>
        </div>
      `;
    }
  }
  
  customElements.define('carrito-componente', CarritoComponente);
  