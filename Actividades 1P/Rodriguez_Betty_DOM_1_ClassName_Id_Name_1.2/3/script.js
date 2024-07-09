// Ocultar todas las prendas al cargar la página
var prendas = document.getElementsByName('prenda'); // Uso del Name
for (var i = 0; i < prendas.length; i++) {
    prendas[i].classList.add('hidden');
}

function mostrarPrenda() {
    // Ocultar todas las prendas
    for (var i = 0; i < prendas.length; i++) {
        prendas[i].classList.add('hidden');
        prendas[i].classList.remove('visible');
    }

    // Obtener el valor seleccionado del menú
    var seleccion = document.getElementById('prendas').value;

    // Mostrar la prenda correspondiente
    if (seleccion > 0 && seleccion <= 6) {
        var prendaSeleccionada = document.getElementById('prenda' + seleccion);
        prendaSeleccionada.classList.remove('hidden');
        prendaSeleccionada.classList.add('visible');
    }
}
