function mostrarPrenda() {
    // Ocultar todas las prendas
    document.getElementById('prenda1').classList.add('hidden');
    document.getElementById('prenda2').classList.add('hidden');
    document.getElementById('prenda3').classList.add('hidden');
    document.getElementById('prenda4').classList.add('hidden');
    
    // Obtener el valor seleccionado del menú
    var seleccion = document.getElementById('menu').value;

    // Mostrar la prenda correspondiente
    if (seleccion == 1) {
        document.getElementById('prenda1').classList.remove('hidden');
        document.getElementById('prenda1').classList.add('visible');
    } else if (seleccion == 2) {
        document.getElementById('prenda2').classList.remove('hidden');
        document.getElementById('prenda2').classList.add('visible');
    } else if (seleccion == 3) {
        document.getElementById('prenda3').classList.remove('hidden');
        document.getElementById('prenda3').classList.add('visible');
    } else if (seleccion == 4) {
        document.getElementById('prenda4').classList.remove('hidden');
        document.getElementById('prenda4').classList.add('visible');
    }
}
