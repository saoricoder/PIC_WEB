class Elemento2 extends HTMLElement {
    constructor() {
            super();
            this.obtenerTemplate();
            this.renderizarTemplate();

        }
        /* ------metodo obtenerTemplate( ) ---------------------- */
    obtenerTemplate() {
            const template = document.createElement('template');
            template.innerHTML = `
            <section>
                <h1> section HTML</h1>
                <h2> dentro del template dentro de la Clase Elemento2</h2>
                <h3> La Clase Elemento2 hereda de la Clase API HTMLElement</h3>
                <div>
                    <p>Parrafo dentro del div, dentro del section HTML</p>
                </div>
            </section>
            return template;
        `;
        } //-------------fin obtenerTemplate() --------
        /* ------metodo obtenerTemplate( ) ---------------------- */
    renderizarTemplate() {
        this.appendChild(this.obtenerTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.renderizarTemplate();
    }

}

customElements.define('elemento-dos', Elemento2);