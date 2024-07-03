function calcularCalificacion() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    var promedio = (nota1 + nota2 + nota3) / 3;

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = '';

    if (isNaN(promedio)) {
        resultadoElement.textContent = 'Ingrese todas las notas.';
        return;
    }

    if (promedio < 5) {
        resultadoElement.textContent = 'El estudiante ha reprobado.';
    } else if (promedio == 5) {
        resultadoElement.textContent = 'El estudiante está condicionado.';
    } else if (promedio ==6 ) {
        resultadoElement.textContent = 'El estudiante está en suspenso.';
    } else if(promedio>=7) {
        resultadoElement.textContent = 'El estudiante ha aprobado.';
    }
}
