class MiBoton extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow root to the element.
        this.attachShadow({ mode: 'open' });

        // Create a button element.
        const button = document.createElement('button');
        button.textContent = 'Botón Personalizado';

        // Apply styles to the button.
        const style = document.createElement('style');
        style.textContent = `
            button {
                background-color: #4CAF50;
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
                border-radius: 12px;
            }
        `;

        // Append the style and button to the shadow DOM.
        this.shadowRoot.append(style, button);

        // Add event listener to handle button click.
        button.addEventListener('click', this.handleClick);
    }

    handleClick() {
        alert('¡Botón personalizado clickeado!');
    }
}

// Define el cutom element del web component
customElements.define('mi-boton', MiBoton);