class Personal {
    constructor(id, nombre, edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }

    obtenerDetalles() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
}
