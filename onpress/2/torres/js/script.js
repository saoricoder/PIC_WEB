class MyComponent extends HTMLElement {
    constructor() {
        super();

        // Crear un shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Crear elementos
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');

        const button = document.createElement('button');
        button.setAttribute('class', 'btn btn-primary');
        button.textContent = 'Cambiar Texto';

        const paragraph = document.createElement('p');
        paragraph.setAttribute('class', 'text');
        paragraph.textContent = 'Este es un párrafo de ejemplo.';

        // Adjuntar elementos al shadow DOM
        shadow.appendChild(wrapper);
        wrapper.appendChild(button);
        wrapper.appendChild(paragraph);

        // Añadir estilos
        const style = document.createElement('style');
        style.textContent = `
            .wrapper {
                text-align: center;
            }
            .text {
                font-size: 18px;
                color: #333;
                margin-top: 10px;
            }
            .btn-primary {
                margin-top: 20px;
            }
            .btn-success {
                margin-top: 20px;
            }
        `;
        shadow.appendChild(style);

        // Función para cambiar el texto
        const changeText = () => {
            paragraph.textContent = "El texto ha sido cambiado!";
            button.textContent = "Texto Cambiado";
            button.classList.remove('btn-primary');
            button.classList.add('btn-success');
        };

        // Añadir el event listener para el botón
        button.addEventListener('click', changeText);

        // Añadir el event listener para la tecla "Enter" en el shadow DOM
        shadow.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                changeText();
            }
        });

        // Hacer que el botón pueda recibir el foco y activar eventos de teclado
        button.setAttribute('tabindex', '0');
    }

    connectedCallback() {
        // Mover el foco al botón cuando el componente se conecta al DOM
        this.shadowRoot.querySelector('button').focus();
    }
}

// Definir el nuevo elemento
customElements.define('my-component', MyComponent);
