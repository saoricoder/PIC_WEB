class NotePrototype {
    constructor(note) {
        this.note = note;
    }

    clone() {
        return new Note(this.note.getContent());
    }
}
