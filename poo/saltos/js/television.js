// Clase para representar las Televisiones
class Television extends Product {
    constructor(id, name, price, screenSize, resolution) {
        super(id, name, price);
        this.screenSize = screenSize;
        this.resolution = resolution;
    }

    getDetails() {
        return `${super.getDetails()}, Tamaño de Pantalla: ${this.screenSize} pulgadas, Resolución: ${this.resolution}`;
    }
}