// Ocultar todas las prendas al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    var prendas = document.querySelectorAll('[name="prenda"]');
    prendas.forEach(function(prenda) {
        prenda.classList.add('hidden');
    });
});

function mostrarPrenda() {
    // Ocultar todas las prendas
    var prendas = document.querySelectorAll('[name="prenda"]');
    prendas.forEach(function(prenda) {
        prenda.classList.add('hidden');
        prenda.classList.remove('visible');
    });

    // Obtener el valor seleccionado del menú
    var seleccion = document.querySelector('#prendas').value;

    // Mostrar la prenda correspondiente
    if (seleccion > 0 && seleccion <= 6) {
        var prendaSeleccionada = document.querySelector('#prenda' + seleccion);
        prendaSeleccionada.classList.remove('hidden');
        prendaSeleccionada.classList.add('visible');
    }
}
