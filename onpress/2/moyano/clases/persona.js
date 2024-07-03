class Persona{
    constructor(cedula,nombre,apellido, edad){
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getNombres(nombre,apellido){
        return this.nombre + " " + this.apellido;
    }

    getEdad(){
        return this.edad;
    }

    getCedula(){
        return this.cedula;
    }

    toString(){
        return this.cedula + " " + this.nombre + " " + this.apellido + " " + this.edad;
    }
}

export default Persona;