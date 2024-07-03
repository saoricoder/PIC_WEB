class ValidadorNota {
    constructor(notaInput, resultadoDiv) {
        this.notaInput = notaInput;
        this.resultadoDiv = resultadoDiv;
    }

    validar() {
        var nota = parseFloat(this.notaInput.value);

        if (isNaN(nota)) {
            this.resultadoDiv.innerHTML = 'Por favor, ingrese un número válido.';
        } else if (nota < 0 || nota > 20) {
            this.resultadoDiv.innerHTML = 'La nota debe estar entre 0 y 20.';
        } else if (nota < 14) {
            this.resultadoDiv.innerHTML = 'La nota es: deficiente';
        } else if (nota >= 14 && nota < 17) {
            this.resultadoDiv.innerHTML = 'La nota es: buena';
        } else {
            this.resultadoDiv.innerHTML = 'La nota es: excelente';
        }
    }
}

const notaInput = document.getElementById('nota');
const resultadoDiv = document.getElementById('resultado');
const validarButton = document.getElementById('validar');
const validador = new ValidadorNota(notaInput, resultadoDiv);

validarButton.addEventListener('click', () => {
    validador.validar();
});
