function mostrarPrenda() {
    // Ocultar todas las prendas
    var prendas = document.getElementsByClassName('prenda'); // Uso del ClassName
    for (var i = 0; i < prendas.length; i++) {
        prendas[i].classList.add('hidden');
        prendas[i].classList.remove('visible');
    }

    // Obtener el valor seleccionado del menú
    var seleccion = document.getElementById('menu').value;

    // Mostrar la prenda correspondiente
    if (seleccion > 0 && seleccion <= 6) {
        var prendaSeleccionada = document.getElementById('prenda' + seleccion); // Uso del Id
        prendaSeleccionada.classList.remove('hidden');
        prendaSeleccionada.classList.add('visible');
    }
}
