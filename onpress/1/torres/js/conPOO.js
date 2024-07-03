// Definimos una clase para el generador de triángulos
class TrianguloGenerador {
    constructor() {
        this.boton = document.getElementById('generateButton');
        this.output = document.getElementById('triangleOutput');
        this.boton.addEventListener('click', () => this.generarTriangulo());
    }

    generarTriangulo() {
        // Obtenemos el número de filas
        const filas = document.getElementById('rowsInput').value;
        this.output.textContent = '';

        // Validamos que se haya ingresado un número válido
        if (filas && filas > 0) {
            // Generamos el triángulo
            let triangulo = '';
            for (let i = 1; i <= filas; i++) {
                triangulo += '*'.repeat(i) + '\n';
            }
            this.output.textContent = triangulo;
        } else {
            this.output.textContent = 'Por favor, ingresa un número válido de filas.';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TrianguloGenerador();
});
