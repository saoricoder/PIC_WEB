class ValidadorTelefono {
    constructor(telefonoInputId, mensajeId) {
        this.telefonoInput = document.getElementById(telefonoInputId);
        this.mensaje = document.getElementById(mensajeId);
    }

    validarTelefono() {
        const telefono = this.telefonoInput.value;

        if (telefono.length !== 10 || !/^\d+$/.test(telefono)) {
            this.mostrarMensaje('Número telefónico inválido. Debe tener 10 dígitos numéricos.', 'red');
            return;
        }

        if (telefono.substring(0, 2) !== '09') {
            this.mostrarMensaje('Número telefónico inválido. Los dos primeros dígitos deben ser "09".', 'red');
            return;
        }

        this.mostrarMensaje('Número telefónico válido.', 'green');
    }

    mostrarMensaje(texto, color) {
        this.mensaje.textContent = texto;
        this.mensaje.style.color = color;
    }
}

const validador = new ValidadorTelefono('telefono', 'mensaje');
const validarBtn = document.getElementById('validarBtn');
validarBtn.addEventListener('click', () => validador.validarTelefono());
