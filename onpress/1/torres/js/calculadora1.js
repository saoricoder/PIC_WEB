function calcular(operador) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor ingresa números válidos";
    } else {
        switch(operador) {
            case 'suma':
                resultado = num1 + num2;
                break;
            case 'resta':
                resultado = num1 - num2;
                break;
            case 'multiplica':
                resultado = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    resultado = "No se puede dividir por 0";
                } else {
                    resultado = num1 / num2;
                }
                break;
        }
    }

    document.getElementById('respuesta').value = resultado;
}