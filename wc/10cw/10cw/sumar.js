class SumaForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const form = document.getElementById('sumForm');
        form.addEventListener('submit', this.handleSubmit);
    }

    handleSubmit(event) {
        event.preventDefault();

        const num1 = parseFloat(document.getElementById('txtNum1').value);
        const num2 = parseFloat(document.getElementById('txtNum2').value);
        const result = num1 + num2;

        document.getElementById('txtRespuesta').value = result;
    }
}

customElements.define('suma-form', SumaForm);

// Inicializar el custom element
document.addEventListener('DOMContentLoaded', () => {
    const sumaFormElement = document.createElement('suma-form');
    document.body.appendChild(sumaFormElement);
});