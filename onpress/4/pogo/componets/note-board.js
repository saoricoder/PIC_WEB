class NoteBoard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.notes = []; // Array para almacenar las notas
        this.render(); // Renderizado inicial del tablero de notas
    }

    connectedCallback() {
        this.render();
    }

    addNote() {
        const note = prompt("Enter your note:"); // Prompt para ingresar la nota
        if (note) {
            this.notes.push(note); // Agregar la nota al array
            this.render(); // Renderizar nuevamente el tablero
        }
    }

    removeNote(index) {
        this.notes.splice(index, 1); // Eliminar nota del array
        this.render(); // Renderizar nuevamente el tablero
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .note-board {
                    padding: 20px;
                }
                .note-item {
                    margin: 10px 0;
                }
            </style>
            <div class="note-board">
                <button id="add-note">Add Note</button>
                ${this.notes.map((note, index) => `
                    <note-item class="note-item" text="${note}" index="${index}"></note-item>
                `).join('')}
            </div>
        `;

        // Evento para agregar nota
        this.shadowRoot.querySelector('#add-note').addEventListener('click', () => this.addNote());
    }
}

customElements.define('note-board', NoteBoard);
