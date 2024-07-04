class Mobile extends Product {
    constructor(id, name, price, screenSize, batteryLife) {
        super(id, name, price);
        this.screenSize = screenSize;
        this.batteryLife = batteryLife;
    }

    getDetails() {
        return `${super.getDetails()}, Tamaño de Pantalla: ${this.screenSize} pulgadas, Batería: ${this.batteryLife} horas`;
    }
}
