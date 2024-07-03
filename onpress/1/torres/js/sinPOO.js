// Función para generar el triángulo de asteriscos
function generarTriangulo() {
    // Obtenemos el número de filas 
    var filas = document.getElementById('rowsInput').value;
    var output = document.getElementById('triangleOutput');
    output.textContent = '';

    // Validamos que se haya ingresado un número válido
    if (filas && filas > 0) {
        // Generamos el triángulo
        var triangulo = '';
        for (var i = 1; i <= filas; i++) {
            triangulo += '*'.repeat(i) + '\n';
        }
        
        output.textContent = triangulo;
    } else {
        
        output.textContent = 'Por favor, ingresa un número válido de filas.';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var boton = document.getElementById('generateButton');
    boton.addEventListener('click', generarTriangulo);
});
