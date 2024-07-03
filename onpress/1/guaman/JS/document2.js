class Estudiante {
    constructor(nota1, nota2, nota3) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    calcularPromedio() {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }

    obtenerEstado() {
        const promedio = this.calcularPromedio();
        if (isNaN(promedio)) {
            return 'Por favor ingrese todas las notas.';
        } else if (promedio < 5) {
            return 'El estudiante ha reprobado.';
        } else if (promedio == 5) {
            return 'El estudiante está condicionado.';
        } else if (promedio == 6) {
            return 'El estudiante está en suspenso.';
        } else if(promedio>=7){
            return 'El estudiante ha aprobado.';
        }
    }
}

function calcularCalificacion() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    const estudiante = new Estudiante(nota1, nota2, nota3);
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = estudiante.obtenerEstado();
}
