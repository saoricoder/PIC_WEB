class ContactComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Contacto</h5>
                    <form>
                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input type="text" class="form-control" id="name" placeholder="Tu nombre">
                        </div>
                        <div class="form-group">
                            <label for="email">Correo electrónico</label>
                            <input type="email" class="form-control" id="email" placeholder="Tu correo electrónico">
                        </div>
                        <div class="form-group">
                            <label for="message">Mensaje</label>
                            <textarea class="form-control" id="message" rows="3" placeholder="Tu mensaje"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        `;
    }
}

customElements.define('contact-component', ContactComponent);
