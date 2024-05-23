class CedulaValidator {
    constructor(cedulaInput, resultOutput) {
        this.cedulaInput = cedulaInput;
        this.resultOutput = resultOutput;
        this.coefficients = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    }

    validate() {
        const cedula = this.cedulaInput.value;

        if (!this.isValidLength(cedula) || !this.isNumeric(cedula)) {
            this.showResult("Cédula inválida. Debe tener 10 dígitos.", 'red');
            return false;
        }

        if (this.isValidCedula(cedula)) {
            this.showResult("Cédula válida.", 'green');
        } else {
            this.showResult("Cédula inválida.", 'red');
        }
    }

    isValidLength(cedula) {
        return cedula.length === 10;
    }

    isNumeric(cedula) {
        return !isNaN(cedula);
    }

    isValidCedula(cedula) {
        let sum = 0;

        for (let i = 0; i < 9; i++) {
            let num = parseInt(cedula.charAt(i)) * this.coefficients[i];
            if (num > 9) num -= 9;
            sum += num;
        }

        const checkDigit = parseInt(cedula.charAt(9));
        const calculatedCheckDigit = 10 - (sum % 10);
        return (calculatedCheckDigit === 10 ? 0 : calculatedCheckDigit) === checkDigit;
    }

    showResult(message, color) {
        this.resultOutput.textContent = message;
        this.resultOutput.style.color = color;
    }
}

document.getElementById('cedula_boton').addEventListener('click', function() {
    const validator = new CedulaValidator(
        document.getElementById('cedula'),
        document.getElementById('result')
    );
    validator.validate();
});
