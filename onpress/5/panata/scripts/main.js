document.addEventListener('DOMContentLoaded', function() {
    const formPersonalizacion = document.getElementById('form-personalizacion');
    const eventCard = document.querySelector('event-card');

    formPersonalizacion.addEventListener('submit', function(e) {
        e.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const fecha = document.getElementById('fecha').value;
        const descripcion = document.getElementById('descripcion').value;

        eventCard.setTitle(titulo);
        eventCard.setDate(fecha);
        eventCard.setDescription(descripcion);
    });
});
