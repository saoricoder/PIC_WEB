// Definición del componente de navegación
class AppNavigation extends HTMLElement {
    constructor() {
      super();
  
      // Creación del shadow DOM para el componente
      this.attachShadow({ mode: 'open' });
  
      // HTML del componente (puedes personalizar aquí)
      this.shadowRoot.innerHTML = `
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Notas</a></li>
            <li><a href="#">Configuración</a></li>
          </ul>
        </nav>
      `;
    }
}
  
// Registrar el componente personalizado en el DOM
customElements.define('app-navigation', AppNavigation);
