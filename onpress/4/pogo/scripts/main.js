// Importar los componentes necesarios
import '../componets/app-navigation.js';
import '../componets/note-board.js';
import '../componets/note-item.js';
// Escuchar el evento 'delete-note' para eliminar una nota
document.addEventListener('delete-note', (e) => {
    // Obtener la instancia del tablero de notas
    const noteBoard = document.querySelector('note-board');
    // Llamar al método para eliminar la nota, pasando el índice desde el detalle del evento
    noteBoard.removeNote(e.detail.index);
});