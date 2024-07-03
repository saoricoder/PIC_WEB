class CedulaValidator {
    constructor() {
        this.cedula = '';
    }

    readInput() {
        this.cedula = document.getElementById('cedula').value;
    }

    isValidLength() {
        return this.cedula.length === 10 && /^\d+$/.test(this.cedula);
    }

    isValidProvince() {
        const provincia = parseInt(this.cedula.substring(0, 2));
        return provincia >= 1 && provincia <= 24;
    }

    calculateChecksum() {
        let suma = 0;
        for (let i = 0; i < 9; i++) {
            let digito = parseInt(this.cedula.charAt(i));
            if (i % 2 === 0) {
                digito *= 2;
                if (digito > 9) {
                    digito -= 9;
                }
            }
            suma += digito;
        }
        return (suma % 10 === 0) ? 0 : 10 - (suma % 10);
    }

    validate() {
        this.readInput();
        const mensaje = document.getElementById('mensaje');

        if (!this.isValidLength()) {
            mensaje.textContent = 'Cédula inválida. Debe tener 10 dígitos numéricos.';
            mensaje.style.color = 'red';
            return;
        }

        if (!this.isValidProvince()) {
            mensaje.textContent = 'Cédula inválida. El código de provincia es incorrecto.';
            mensaje.style.color = 'red';
            return;
        }

        const digitoVerificador = parseInt(this.cedula.charAt(9));
        const checksum = this.calculateChecksum();

        if (checksum === digitoVerificador) {
            mensaje.textContent = 'Cédula válida.';
            mensaje.style.color = 'green';
        } else {
            mensaje.textContent = 'Cédula inválida.';
            mensaje.style.color = 'red';
        }
    }
}

const cedulaValidator = new CedulaValidator();
