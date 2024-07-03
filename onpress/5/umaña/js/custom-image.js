// Define a custom button component
class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* Add your custom button styles here */
                button {
                    background-color: #ff0000;
                    color: #ffffff;
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

// Define a custom image component
class CustomImage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* Add your custom image styles here */
                img {
                    border-radius: 50%;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                }
            </style>
            <img src="${this.getAttribute('src')}" alt="${this.getAttribute('alt')}">
        `;
    }
}

// Register the custom components
customElements.define('custom-button', CustomButton);
customElements.define('custom-image', CustomImage);