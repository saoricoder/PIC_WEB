function validarContraseña() {
    var contraseña = document.getElementById('password').value;
    var mensaje = document.getElementById('mensaje');

    if (contraseña.length < 8) {
        mensaje.textContent = "La contraseña debe tener al menos 8 caracteres.";
    } else if (!/[a-z]/.test(contraseña)) {
        mensaje.textContent = "La contraseña debe contener al menos una letra minúscula.";
    } else if (!/[A-Z]/.test(contraseña)) {
        mensaje.textContent = "La contraseña debe contener al menos una letra mayúscula.";
    } else if (!/\d/.test(contraseña)) {
        mensaje.textContent = "La contraseña debe contener al menos un número.";
    } else {
        mensaje.textContent = "La contraseña es válida.";
    }
}
