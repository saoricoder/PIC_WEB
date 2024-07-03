class HomeComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="jumbotron">
                <h1 class="display-4">Bienvenido a MiApp</h1>
                <p class="lead">Esta es una aplicación web de ejemplo utilizando web components y Bootstrap.</p>
                <hr class="my-4">
                <p>Explora las diferentes secciones utilizando la navegación superior.</p>
            </div>
        `;
    }
}

customElements.define('home-component', HomeComponent);
