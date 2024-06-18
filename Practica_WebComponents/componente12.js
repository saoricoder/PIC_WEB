
class CustomMessage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `<p>${this.getAttribute('message')}</p>`;
    }

    static get observedAttributes() {
        return ['message'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'message') {
            this.shadowRoot.innerHTML = `<p>${newValue}</p>`;
        }
    }
}

document.getElementById('boton1').addEventListener('click', () => {
    const mensaje = document.getElementById('mensajeInput').value;
    document.getElementById('mensaje1').setAttribute('message', mensaje);
});

document.getElementById('boton2').addEventListener('click', () => {
    const mensaje = document.getElementById('mensajeInput').value;
    document.getElementById('mensaje2').setAttribute('message', mensaje);
});
customElements.define('custom-message', CustomMessage);