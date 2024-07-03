function validarNota() {
    var nota = parseFloat(document.getElementById('nota').value);

    if (isNaN(nota)) {
        document.getElementById('resultado').innerHTML = 'Por favor, ingrese un número válido.';
    } else if (nota < 0 || nota > 20) {
        document.getElementById('resultado').innerHTML = 'La nota debe estar entre 0 y 20.';
    } else if (nota < 14) {
        document.getElementById('resultado').innerHTML = 'La nota es: Deficiente';
    } else if (nota >= 14 && nota < 17) {
        document.getElementById('resultado').innerHTML = 'La nota es: Buena';
    } else {
        document.getElementById('resultado').innerHTML = 'La nota es: Excelente';
    }
}
