function validarEmail() {
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje');
    var resultado = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!resultado.test(email)) {
        mensaje.textContent = 'Correo electrónico inválido.';
        mensaje.style.color = 'red';
        return;
    }

    mensaje.textContent = 'Correo electrónico válido.';
    mensaje.style.color = 'green';
}
