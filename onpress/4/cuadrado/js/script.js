// Define el Custom Element para el menú de navegación
class NavigationMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        fetch('../html/navigation-menu.html')
            .then(response => response.text())
            .then(data => {
                this.shadowRoot.innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar el menú de navegación:', error);
            });
    }
}
customElements.define('navigation-menu', NavigationMenu);

// Define el Custom Element para la Sección Uno
class SectionOne extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        fetch('../html/section-one.html')
            .then(response => response.text())
            .then(data => {
                this.shadowRoot.innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar la Sección Uno:', error);
            });
    }
}
customElements.define('section-one', SectionOne);

// Define el Custom Element para la Sección Dos
class SectionTwo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        fetch('../html/section-two.html')
            .then(response => response.text())
            .then(data => {
                this.shadowRoot.innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar la Sección Dos:', error);
            });
    }
}
customElements.define('section-two', SectionTwo);
