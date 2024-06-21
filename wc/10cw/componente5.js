class Suma extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        

        // Crear un contenedor para los estilos y la funcionalidad
        const container = document.createElement('div');
        container.innerHTML = `
        <style>
          /* Estilos del componente */
          :host {
            display: block;
            margin-top: 10px;
          }
        </style>
        <slot></slot>
      `;

        this.shadowRoot.appendChild(container);
    }

    connectedCallback() {
        // Obtener referencia al botón de suma y añadir el listener de clic
        const btnSumar = document.querySelector('#btnSumar');
        if (btnSumar) {
            btnSumar.addEventListener('click', () => this.sumar());
        }
    }

    sumar() {
        // Obtener los valores de los inputs
        const n1 = parseFloat(document.querySelector('#txtn1').value);
        const n2 = parseFloat(document.querySelector('#txtn2').value);

        // Comprobar si los valores son números válidos
        if (isNaN(n1) || isNaN(n2)) {
            alert('Por favor, introduce números válidos');
            return;
        }

        // Realizar la suma
        const resultado = n1 + n2;

        // Mostrar el resultado en el input de resultado
        document.querySelector('#txtres').value = resultado;
    }
}

// Definir el nuevo elemento personalizado
customElements.define('componente-suma', Suma);