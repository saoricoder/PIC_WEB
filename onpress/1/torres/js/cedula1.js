function validarCedula() {
    var cedula = document.getElementById('cedula').value;
    var mensaje = document.getElementById('mensaje');

    if (cedula.length !== 10 || !/^\d+$/.test(cedula)) {
        mensaje.textContent = 'Cédula inválida. Debe tener 10 dígitos numéricos.';
        return;
    }

    var provincia = parseInt(cedula.substring(0, 2));
    if (provincia < 1 || provincia > 24) {
        mensaje.textContent = 'Cédula inválida. El código de provincia es incorrecto.';
        return;
    }

    var digitoVerificador = parseInt(cedula.charAt(9));
    var suma = 0;
    for (var i = 0; i < 9; i++) {
        var digito = parseInt(cedula.charAt(i));
        if (i % 2 === 0) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }
        suma += digito;
    }

    var ultimoDigito = (suma % 10 === 0) ? 0 : 10 - (suma % 10);

    if (ultimoDigito === digitoVerificador) {
        mensaje.textContent = 'Cédula válida.';
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'Cédula inválida.';
        mensaje.style.color = 'red';
    }
}