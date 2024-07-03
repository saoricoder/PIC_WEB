class Gerente extends Personal {
    constructor(id, nombre, edad, area) {
        super(id, nombre, edad);
        this.area = area;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Área: ${this.area}`;
    }
}
