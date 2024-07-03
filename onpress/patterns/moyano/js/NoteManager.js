class NoteManager {
    constructor() {
        this.notes = [];
        this.mementos = [];
    }

    addNote(note) {
        this.notes.push(note);
    }

    cloneNote() {
        const lastNote = this.notes[this.notes.length - 1];
        const prototype = new NotePrototype(lastNote);
        this.addNote(prototype.clone());
    }

    saveMemento(note) {
        this.mementos.push(new NoteMemento(note));
    }

    restoreMemento(note) {
        const memento = this.mementos.pop();
        if (memento) {
            memento.restore(note);
        }
    }

    getNotes() {
        return this.notes;
    }
}
