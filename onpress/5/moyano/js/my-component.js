class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.container = document.createElement('div');
        this.container.style.width = '100px';
        this.container.style.height = '100px';
        this.container.style.backgroundColor = 'blue';

        this.shadowRoot.appendChild(this.container);
    }

    static get observedAttributes() {
        return ['color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'color') {
            this.container.style.backgroundColor = newValue;
        }
    }
}

customElements.define('my-component', MyComponent);
