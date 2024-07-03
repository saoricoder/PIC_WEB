document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al formulario y al mensaje de salida
    const form = document.getElementById('registroForm');
    const mensajeDiv = document.getElementById('mensaje');

    // Función para manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío por defecto del formulario

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validación simple: asegurarse de que los campos no estén vacíos
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '') {
            mostrarMensaje('Por favor completa todos los campos.', 'alert-danger');
        } else {
            // Si todo está bien, mostrar mensaje de éxito
            mostrarMensaje(`Registro exitoso para ${nombre} (${email}).`, 'alert-success');

            // Limpiar campos después del registro exitoso (opcional)
            form.reset();
        }
    });

    // Función para mostrar mensajes en el div de mensaje
    function mostrarMensaje(mensaje, clase) {
        // Limpiar mensaje previo si existe
        mensajeDiv.innerHTML = '';

        // Crear elemento div para la alerta
        const div = document.createElement('div');
        div.className = `alert ${clase}`;
        div.textContent = mensaje;

        // Agregar la alerta al div de mensaje
        mensajeDiv.appendChild(div);
    }
});
