class CustomButon extends HTMLElement {
    constructor() {
        super();
        console.log('boton creado');

    }
}
window.customElements.define('custom-button', CustomButon);