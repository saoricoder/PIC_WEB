// Definir un componente web personalizado
class CustomizableContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style id="custom-styles">
                :host {
                    display: block;
                    padding: 20px;
                    border: 1px solid #ccc;
                }
                ::slotted(*) {
                    color: inherit;
                    font-size: inherit;
                }
            </style>
            <slot></slot>
        `;
    }

    set bgColor(color) {
        this.style.backgroundColor = color;
    }

    set textColor(color) {
        this.style.color = color;
    }

    set fontSize(size) {
        this.style.fontSize = `${size}px`;
    }
}

// Registrar el componente web
customElements.define('customizable-content', CustomizableContent);

// Funcionalidad de interacción con el formulario
document.getElementById('applyChanges').addEventListener('click', () => {
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
    const fontSize = document.getElementById('fontSize').value;

    const content = document.querySelector('customizable-content');

    content.bgColor = bgColor;
    content.textColor = textColor;
    content.fontSize = fontSize;
});
