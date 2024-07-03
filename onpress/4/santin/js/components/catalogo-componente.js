class CatalogoComponente extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos específicos del componente */
      </style>
      <div>
        <h2>Catálogo de Productos</h2>
        <p>Aquí están los productos disponibles.</p>
      </div>
    `;
  }
}

customElements.define('catalogo-componente', CatalogoComponente);
