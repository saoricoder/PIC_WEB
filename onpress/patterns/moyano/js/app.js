document.addEventListener('DOMContentLoaded', () => {
    const noteContent = document.getElementById('note-content');
    const saveNoteButton = document.getElementById('save-note');
    const cloneNoteButton = document.getElementById('clone-note');
    const restoreNoteButton = document.getElementById('restore-note');
    const notesList = document.getElementById('notes-list');

    const noteManager = new NoteManager();

    saveNoteButton.addEventListener('click', () => {
        const note = new Note(noteContent.value);
        noteManager.addNote(note);
        noteManager.saveMemento(note);
        updateNotesList();
    });

    cloneNoteButton.addEventListener('click', () => {
        noteManager.cloneNote();
        updateNotesList();
    });

    restoreNoteButton.addEventListener('click', () => {
        const lastNote = noteManager.getNotes()[noteManager.getNotes().length - 1];
        noteManager.restoreMemento(lastNote);
        noteContent.value = lastNote.getContent();
    });

    function updateNotesList() {
        notesList.innerHTML = '';
        noteManager.getNotes().forEach((note, index) => {
            const noteElement = document.createElement('div');
            noteElement.textContent = `Nota ${index + 1}: ${note.getContent()}`;
            notesList.appendChild(noteElement);
        });
    }
});
