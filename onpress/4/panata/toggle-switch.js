class ToggleSwitch extends HTMLElement {
    constructor() {
      super();
  
      // Crear un Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Crear un contenedor para el interruptor
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'toggle-wrapper');
  
      // Crear el interruptor
      const switchLabel = document.createElement('label');
      switchLabel.setAttribute('class', 'switch');
  
      const switchInput = document.createElement('input');
      switchInput.setAttribute('type', 'checkbox');
      switchInput.addEventListener('change', () => {
        updateSwitch();
      });
  
      const switchSpan = document.createElement('span');
      switchSpan.setAttribute('class', 'slider');
  
      switchLabel.appendChild(switchInput);
      switchLabel.appendChild(switchSpan);
      
      const statusText = document.createElement('span');
      statusText.setAttribute('class', 'status');
      statusText.textContent = 'Off';
  
      // Estilos del interruptor
      const style = document.createElement('style');
      style.textContent = `
        .toggle-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 20px 0;
        }
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 34px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: #28a745;
        }
        input:checked + .slider:before {
          transform: translateX(26px);
        }
        .status {
          font-size: 16px;
          font-weight: bold;
        }
      `;
  
      // Función para actualizar el estado del interruptor
      const updateSwitch = () => {
        statusText.textContent = switchInput.checked ? 'On' : 'Off';
      };
  
      // Adjuntar elementos y estilos al Shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
      wrapper.appendChild(switchLabel);
      wrapper.appendChild(statusText);
    }
  }
  
  // Definir el nuevo elemento personalizado
  customElements.define('toggle-switch', ToggleSwitch);
  