// Definición de la clase Producto
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Definición de la clase Pedido
class Pedido {
    constructor() {
        this.items = [];
    }

    agregarProducto(producto) {
        this.items.push(producto);
    }

    calcularTotal() {
        let total = 0;
        this.items.forEach(producto => {
            total += producto.precio;
        });
        return total;
    }
}

// Lista de productos disponibles (ejemplo)
const productos = [
    new Producto(1, "Base de Maquillaje", 15.99),
    new Producto(2, "Lápiz Labial", 9.99),
    new Producto(3, "Sombra de Ojos", 12.99)
];

// Creación del objeto Pedido
const pedido = new Pedido();

// Función para mostrar la lista de productos en el HTML
function mostrarProductos() {
    const productListDiv = document.getElementById("product-list");
    productListDiv.innerHTML = ""; // Limpiar el contenido existente

    productos.forEach(producto => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item", "card", "mb-3");
        productItem.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio.toFixed(2)}</p>
                <button class="btn btn-pink btn-sm" onclick="addToCart(${producto.id})">Añadir al carrito</button>
            </div>
        `;
        productListDiv.appendChild(productItem);
    });
}

// Función para agregar productos al pedido
function addToCart(productId) {
    const productoSeleccionado = productos.find(producto => producto.id === productId);
    if (productoSeleccionado) {
        pedido.agregarProducto(productoSeleccionado);

        // Actualizar la lista de productos en el pedido
        const orderList = document.getElementById("order-items");
        const item = document.createElement("li");
        item.textContent = `${productoSeleccionado.nombre} - $${productoSeleccionado.precio.toFixed(2)}`;
        orderList.appendChild(item);

        // Actualizar el total del pedido
        const orderTotal = document.getElementById("order-total");
        orderTotal.textContent = `$${pedido.calcularTotal().toFixed(2)}`;
    }
}

// Función para simular el proceso de checkout
function checkout() {
    alert(`Pedido realizado por un total de $${pedido.calcularTotal().toFixed(2)}.`);
}

// Mostrar productos al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    mostrarProductos();
});
