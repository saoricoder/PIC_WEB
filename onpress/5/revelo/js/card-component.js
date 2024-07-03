class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['text', 'background', 'text-color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'text' && this.shadowRoot) {
            this.shadowRoot.querySelector('.card-text').innerText = newValue;
        } else if (name === 'background' && this.shadowRoot) {
            this.shadowRoot.querySelector('.card').style.backgroundColor = newValue;
        } else if (name === 'text-color' && this.shadowRoot) {
            this.shadowRoot.querySelector('.card-text').style.color = newValue;
        }
    }

    render() {
        const text = this.getAttribute('text');
        const background = this.getAttribute('background');
        const textColor = this.getAttribute('text-color');

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    background-color: ${background};
                    text-align: center;
                }
                .card-text {
                    font-size: 1.2em;
                    color: ${textColor};
                }
            </style>
            <div class="card">
                <div class="card-text">${text}</div>
            </div>
        `;
    }
}

customElements.define('card-component', CardComponent);
