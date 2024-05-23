
const boton = document.getElementById("cedula_boton");
document.getElementById('cedula_boton').addEventListener('click', function() {
    const cedula = document.getElementById('cedula').value;
    //const result = document.getElementById('result');
    const result = createElement("h1");

    function validateCedula(cedula) {
        if (cedula.length !== 10 || isNaN(cedula)) {
            body.appendChild(result);
            result.textContent = "Cédula inválida. Debe tener 10 dígitos.";
            result.style.color = 'red';
            return false;
        }

        const coef = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            let num = parseInt(cedula.charAt(i)) * coef[i];
            if (num > 9) num -= 9;
            sum += num;
        }

        const checkDigit = parseInt(cedula.charAt(9));
        const calculatedCheckDigit = 10 - (sum % 10);
        if (calculatedCheckDigit === 10 ? 0 : calculatedCheckDigit === checkDigit) {
            body.appendChild(result);
            result.textContent = "Cédula válida.";
            result.style.color = 'green';
        } else {
            body.appendChild(result);
            result.textContent = "Cédula inválida.";
            result.style.color = 'red';
        }
    }

    validateCedula(cedula);
});
