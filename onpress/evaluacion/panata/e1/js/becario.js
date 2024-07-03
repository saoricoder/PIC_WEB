class Becario extends Personal {
    constructor(id, nombre, edad, universidad) {
        super(id, nombre, edad);
        this.universidad = universidad;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Universidad: ${this.universidad}`;
    }
}
