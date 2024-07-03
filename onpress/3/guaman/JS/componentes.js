class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        fetch('html/header.html')
            .then(response => response.text())
            .then(data => {
                this.shadowRoot.innerHTML = data;
            });
    }
}

class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        fetch('html/footer.html')
            .then(response => response.text())
            .then(data => {
                this.shadowRoot.innerHTML = data;
            });
    }
}

class MainContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        if (this.getAttribute('page')) {
            const page = this.getAttribute('page');
            fetch(`html/${page}.html`)
                .then(response => response.text())
                .then(data => {
                    this.shadowRoot.innerHTML = data;
                });
        } else {
            fetch('html/main-content.html')
                .then(response => response.text())
                .then(data => {
                    this.shadowRoot.innerHTML = data;
                });
        }
    }
}

customElements.define('header-component', HeaderComponent);
customElements.define('footer-component', FooterComponent);
customElements.define('main-content', MainContent);
