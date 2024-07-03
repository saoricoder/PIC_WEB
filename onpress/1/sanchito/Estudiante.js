class Estudiante extends Persona {
    constructor(codigoPersona, nombresPersona, edadPersona, matriculaEstudiante, semestreEstudiante) {
        super(codigoPersona, nombresPersona, edadPersona);
        this.matriculaEstudiante = matriculaEstudiante;
        this.semestreEstudiante = semestreEstudiante;
    }
}