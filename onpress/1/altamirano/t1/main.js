function compararNumeros() {
    // Obtener los valores de los dos números ingresados por el usuario
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    // Verificar si ambos campos han sido completados
    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor ingrese dos números válidos.');
        return;
    }

    // Comparar los números y mostrar el resultado
    if (numero1 > numero2) {
        document.getElementById('resultado').innerText = `El número ${numero1} es mayor que ${numero2}.`;
    } else if (numero2 > numero1) {
        document.getElementById('resultado').innerText = `El número ${numero2} es mayor que ${numero1}.`;
    } else {
        document.getElementById('resultado').innerText = `Ambos números son iguales: ${numero1} y ${numero2}.`;
    }
}

