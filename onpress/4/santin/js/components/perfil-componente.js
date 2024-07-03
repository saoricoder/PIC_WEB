class PerfilComponente extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos específicos del componente */
      </style>
      <div>
        <h2>Perfil de Usuario</h2>
        <p>Aquí está tu perfil de usuario.</p>
      </div>
    `;
  }
}

customElements.define('perfil-componente', PerfilComponente);
