class Empleado extends Personal {
    constructor(id, nombre, edad, departamento) {
        super(id, nombre, edad);
        this.departamento = departamento;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Departamento: ${this.departamento}`;
    }
}
