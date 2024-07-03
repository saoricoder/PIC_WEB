
function esFibonacci(numero) {
    if (numero < 0) return false;

    let a = 0, b = 1;
    if (numero === a || numero === b) return true;

    let c = a + b;
    while (c <= numero) {
        if (c === numero) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

function validarFibonacci() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = esFibonacci(numero);
    const textoResultado = resultado ? 'Sí' : 'No';
    document.getElementById('result').innerText = `${numero} pertenece a la serie de Fibonacci: ${textoResultado}`;
}
