function validarTelefono() {
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje');

    if (telefono.length !== 10 || !/^\d+$/.test(telefono)) {
        mensaje.textContent = 'Número telefónico inválido. Debe tener 10 dígitos numéricos.';
        mensaje.style.color = 'red';
        return;
    }

    if (telefono.substring(0, 2) !== '09') {
        mensaje.textContent = 'Número telefónico inválido. Los dos primeros dígitos deben ser "09".';
        mensaje.style.color = 'red';
        return;
    }

    mensaje.textContent = 'Número telefónico válido.';
    mensaje.style.color = 'green';
}
