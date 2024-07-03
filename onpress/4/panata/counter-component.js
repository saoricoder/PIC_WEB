class CounterComponent extends HTMLElement {
    constructor() {
      super();
  
      // Crear un Shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Crear contenedor del contador
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'counter-wrapper');
  
      // Crear botón de decrementar
      const decrementButton = document.createElement('button');
      decrementButton.textContent = '-';
      decrementButton.addEventListener('click', () => {
        this.counterValue--;
        updateCounter();
      });
  
      // Crear botón de incrementar
      const incrementButton = document.createElement('button');
      incrementButton.textContent = '+';
      incrementButton.addEventListener('click', () => {
        this.counterValue++;
        updateCounter();
      });
  
      // Crear elemento para mostrar el valor del contador
      const counterDisplay = document.createElement('span');
      counterDisplay.setAttribute('class', 'counter-value');
      this.counterValue = parseInt(this.getAttribute('initial'), 10) || 0;
      counterDisplay.textContent = this.counterValue;
  
      const style = document.createElement('style');
      style.textContent = `
        .counter-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 20px 0;
        }
        button {
          padding: 10px;
          font-size: 20px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #f0f0f0;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #ddd;
        }
        .counter-value {
          font-size: 24px;
          font-weight: bold;
        }
      `;
  
      // Función para actualizar el valor del contador
      const updateCounter = () => {
        counterDisplay.textContent = this.counterValue;
      };
  
      // Adjuntar elementos y estilos al Shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
      wrapper.appendChild(decrementButton);
      wrapper.appendChild(counterDisplay);
      wrapper.appendChild(incrementButton);
    }
  }
  
  customElements.define('counter-component', CounterComponent);
  