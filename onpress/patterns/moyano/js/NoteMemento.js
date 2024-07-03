class NoteMemento {
    constructor(note) {
        this.memento = note.getContent();
    }

    restore(note) {
        note.setContent(this.memento);
    }
}
