class TelefonoValidator {
    constructor(telefonoInputId, mensajeOutputId) {
        this.telefonoInput = document.getElementById(telefonoInputId);
        this.messageOutput = document.getElementById(mensajeOutputId);
    }

    validar() {
        const telefono = this.telefonoInput.value.trim();
        const provincia = telefono.substring(0, 2); // Suponiendo que los primeros dos dígitos representan la provincia

        // Patrones de provincias de Ecuador para números fijos
        const patronesProvincias = {
            "02": /^\d{7}$/, // Pichincha (Quito)
            "03": /^\d{7}$/, // Guayas (Guayaquil)
            "04": /^\d{7}$/, // Manabí (Portoviejo)
            "05": /^\d{7}$/, // El Oro (Machala)
            "06": /^\d{7}$/, // Esmeraldas
            "07": /^\d{7}$/, // Azuay (Cuenca)
            "08": /^\d{7}$/, // Loja
            "09": /^\d{7}$/, // Tungurahua (Ambato)
            "22": /^\d{7}$/, // Bolívar (Guaranda)
            "23": /^\d{7}$/, // Cañar
            "24": /^\d{7}$/, // Carchi
            "25": /^\d{7}$/, // Cotopaxi (Latacunga)
            "26": /^\d{7}$/, // Chimborazo (Riobamba)
            "27": /^\d{7}$/, // Imbabura (Ibarra)
            "28": /^\d{7}$/, // Napo
            "29": /^\d{7}$/, // Pastaza (Puyo)
            "30": /^\d{7}$/, // Sucumbíos (Nueva Loja)
            "31": /^\d{7}$/, // Orellana (Francisco de Orellana)
            "32": /^\d{7}$/, // Santo Domingo de los Tsáchilas
            "33": /^\d{7}$/, // Santa Elena
            "34": /^\d{7}$/, // Galápagos (Puerto Baquerizo Moreno)
            // Puedes agregar más provincias según su patrón de número telefónico aquí
        };

        const esValido = patronesProvincias[provincia] && patronesProvincias[provincia].test(telefono.substring(2));

        if (esValido) {
            this.mostrarMensaje("Número telefónico válido.", true);
        } else {
            this.mostrarMensaje("El número telefónico no es válido.", false);
        }
    }

    mostrarMensaje(mensaje, esValido) {
        this.messageOutput.textContent = mensaje;
        if (esValido) {
            this.messageOutput.classList.add('valid-message');
        } else {
            this.messageOutput.classList.remove('valid-message');
        }
    }
}

const telefonoValidator = new TelefonoValidator("telefono", "mensaje");
