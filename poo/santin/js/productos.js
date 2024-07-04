// productos.js

// Clase base Producto
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    mostrarInformacion() {
        return `Producto: ${this.nombre}, Precio: $${this.precio.toFixed(2)}, Stock: ${this.stock}`;
    }
}

// Clase derivada ProductoElectrónico
class ProductoElectrónico extends Producto {
    constructor(nombre, precio, stock, marca, garantia) {
        super(nombre, precio, stock);
        this.marca = marca;
        this.garantia = garantia;
    }

    mostrarInformacion() {
        return `${super.mostrarInformacion()}, Marca: ${this.marca}, Garantía: ${this.garantia}`;
    }
}

// Clase derivada ProductoAlimenticio
class ProductoAlimenticio extends Producto {
    constructor(nombre, precio, stock, fechaCaducidad, ingredientes) {
        super(nombre, precio, stock);
        this.fechaCaducidad = fechaCaducidad;
        this.ingredientes = ingredientes;
    }

    mostrarInformacion() {
        return `${super.mostrarInformacion()}, Fecha de Caducidad: ${this.fechaCaducidad}, Ingredientes: ${this.ingredientes}`;
    }
}

// Clase derivada ProductoRopa
class ProductoRopa extends Producto {
    constructor(nombre, precio, stock, talla, material) {
        super(nombre, precio, stock);
        this.talla = talla;
        this.material = material;
    }

    mostrarInformacion() {
        return `${super.mostrarInformacion()}, Talla: ${this.talla}, Material: ${this.material}`;
    }
}

// Lista de productos inicial
const productos = [
    new ProductoElectrónico('Televisor LED', 500, 10, 'Samsung', '2 años'),
    new ProductoAlimenticio('Leche', 1.5, 50, '2024-12-01', 'Leche, Vitaminas'),
    new ProductoRopa('Camiseta', 20, 100, 'M', 'Algodón'),
    new ProductoElectrónico('Laptop', 1200, 5, 'HP', '1 año'),
    new ProductoAlimenticio('Pan Integral', 2, 30, '2024-11-15', 'Harina, Agua, Levadura'),
    new ProductoRopa('Pantalón Jeans', 40, 80, 'L', 'Denim'),
    new ProductoElectrónico('Smartphone', 300, 15, 'Xiaomi', '1 año'),
    new ProductoAlimenticio('Yogurt Natural', 1, 40, '2024-11-30', 'Leche, Cultivos lácticos'),
    new ProductoRopa('Sweater de Lana', 50, 60, 'XL', 'Lana'),
];
