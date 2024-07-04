// index.js

document.addEventListener('DOMContentLoaded', function() {
    // Definir productos destacados y últimos productos agregados
    const productosDestacados = productos.slice(0, 3);
    const ultimosProductos = productos.slice(-3);

    // Función para mostrar productos en una lista
    function mostrarProductos(productos, containerId) {
        const productContainer = document.getElementById(containerId);
        productContainer.innerHTML = ''; // Limpiar contenido previo

        productos.forEach(producto => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.mostrarInformacion()}</p>
                <p class="product-details">${producto instanceof ProductoElectrónico ? 'Tipo: Electrónico' : (producto instanceof ProductoAlimenticio ? 'Tipo: Alimenticio' : 'Tipo: Ropa')}</p>
                <button class="delete-button" data-nombre="${producto.nombre}">Eliminar</button>
            `;
            productContainer.appendChild(productDiv);
        });

        // Añadir listeners a los botones de eliminación
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const nombreProducto = e.target.dataset.nombre;
                eliminarProducto(nombreProducto);
                mostrarProductos(productosDestacados, 'featured-products');
                mostrarProductos(ultimosProductos, 'latest-products');
            });
        });
    }

    // Función para eliminar productos
    function eliminarProducto(nombreProducto) {
        const index = productos.findIndex(producto => producto.nombre === nombreProducto);
        if (index > -1) {
            productos.splice(index, 1);
        }
    }

    // Mostrar productos destacados y últimos productos agregados
    mostrarProductos(productosDestacados, 'featured-products');
    mostrarProductos(ultimosProductos, 'latest-products');
});
