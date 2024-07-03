class NoteItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const text = this.getAttribute('text'); // Obtener el texto de la nota
        const index = this.getAttribute('index'); // Obtener el índice de la nota
        this.shadowRoot.innerHTML = `
            <style>
                .note {
                    border: 1px solid #ccc;
                    padding: 10px;
                    border-radius: 5px;
                }
                .note button {
                    margin-left: 10px;
                }
            </style>
            <div class="note">
                ${text} <!-- Mostrar el texto de la nota -->
                <button id="delete-note">Delete</button>
            </div>
        `;

        // Evento para eliminar la nota
        this.shadowRoot.querySelector('#delete-note').addEventListener('click', () => {
            // Disparar evento 'delete-note' con el índice de la nota como detalle
            this.dispatchEvent(new CustomEvent('delete-note', {
                detail: { index: parseInt(index) }, // Convertir el índice a entero
                bubbles: true,
                composed: true
            }));
        });
    }
}

customElements.define('note-item', NoteItem);
