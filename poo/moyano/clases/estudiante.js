import Persona from "./persona.js";

class Estudiante extends Persona{
    constructor(cedula,nombre,apellido,edad,carrera, nivel){
        super(cedula,nombre,apellido,edad);
        this.carrera = carrera;
        this.nivel = nivel;
    }

    getCarrera(){
        return this.carrera;
    }

    getNivel(){
        return this.nivel;
    }

    toString(){
        return super.toString() + " " + this.carrera + " " + this.nivel;
    }
}

export default Estudiante;