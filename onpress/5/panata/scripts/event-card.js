class EventCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="scripts/style-event-card.css">
            <div class="event-card">
                <h3 id="event-title">Título del Evento</h3>
                <p id="event-date">Fecha del Evento</p>
                <p id="event-description">Descripción del Evento</p>
            </div>
        `;
    }

    setTitle(nuevoTitulo) {
        this.shadowRoot.getElementById('event-title').innerText = nuevoTitulo;
    }

    setDate(nuevaFecha) {
        this.shadowRoot.getElementById('event-date').innerText = nuevaFecha;
    }

    setDescription(nuevaDescripcion) {
        this.shadowRoot.getElementById('event-description').innerText = nuevaDescripcion;
    }
}

customElements.define('event-card', EventCard);
