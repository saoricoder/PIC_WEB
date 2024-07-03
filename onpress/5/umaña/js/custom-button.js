// Definir el Web Component para el botón personalizado
class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* Estilos personalizados para el botón */
                button {
                    background-color: #007bff;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            </style>
            <button><slot></slot></button>
        `;
    }
}

// Definir el Web Component para la imagen personalizada
class CustomImage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* Estilos personalizados para la imagen */
                img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 5px;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                }
            </style>
            <img src="${this.getAttribute('src')}" alt="${this.getAttribute('alt')}">
        `;
    }
}

// Registrar los Web Components personalizados
customElements.define('custom-button', CustomButton);
customElements.define('custom-image', CustomImage);