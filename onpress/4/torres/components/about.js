class AboutComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Acerca de Nosotros</h5>
                    <p class="card-text">MiApp es una aplicación diseñada para demostrar el uso de web components.</p>
                </div>
            </div>
        `;
    }
}

customElements.define('about-component', AboutComponent);
