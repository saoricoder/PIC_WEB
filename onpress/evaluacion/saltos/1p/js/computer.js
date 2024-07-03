class Computer extends Product {
    constructor(id, name, price, ram, storage) {
        super(id, name, price);
        this.ram = ram;
        this.storage = storage;
    }

    getDetails() {
        return `${super.getDetails()}, RAM: ${this.ram}GB, Almacenamiento: ${this.storage}GB`;
    }
}
