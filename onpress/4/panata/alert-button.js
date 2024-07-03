class AlertButton extends HTMLElement {
  constructor() {
    super();

    // Crear un Shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    // Crear un elemento de botón
    const button = document.createElement('button');
    button.textContent = this.getAttribute('text'); // Obtener el texto del atributo 'text' del componente
    button.addEventListener('click', () => {
      alert('¡Botón de alerta clickeado!');
    });

    // Definir los estilos del botón
    const style = document.createElement('style');
    style.textContent = `
      button {
        padding: 10px 20px;
        font-size: 16px;
        color: #fff;
        background-color: #28a745;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      button:hover {
        background-color: #218838;
      }
      button:active {
        background-color: #1e7e34;
      }
    `;

    // Adjuntar los estilos y el botón al Shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(button);
  }
}

// Definir el nuevo elemento personalizado
customElements.define('alert-button', AlertButton);
