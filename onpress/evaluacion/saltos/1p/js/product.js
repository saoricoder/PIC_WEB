class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getDetails() {
        return `Nombre: ${this.name}, Precio: ${this.price}`;
    }
}
