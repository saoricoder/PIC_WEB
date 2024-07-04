// category.js

document.addEventListener('DOMContentLoaded', function() {
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
                mostrarProductos(filtrarProductosPorCategoria(), containerId);
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

    // Función para filtrar productos por categoría basada en el containerId
    function filtrarProductosPorCategoria() {
        const containerId = document.querySelector('.product-list').id;
        let filteredProducts = [];

        if (containerId === 'electronic-products') {
            filteredProducts = productos.filter(producto => producto instanceof ProductoElectrónico);
        } else if (containerId === 'food-products') {
            filteredProducts = productos.filter(producto => producto instanceof ProductoAlimenticio);
        } else if (containerId === 'clothing-products') {
            filteredProducts = productos.filter(producto => producto instanceof ProductoRopa);
        } else if (containerId === 'product-list') {
            filteredProducts = productos;
        }

        return filteredProducts;
    }

    // Mostrar productos de la categoría actual
    const categoryProducts = filtrarProductosPorCategoria();
    const containerId = document.querySelector('.product-list').id;
    mostrarProductos(categoryProducts, containerId);
});
