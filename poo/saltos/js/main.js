let products = [];
let currentProductId = null;

document.getElementById('product-form').addEventListener('submit', addProduct);
document.getElementById('update-button').addEventListener('click', updateProduct);

// Maneja la selección de tipo de producto
document.querySelectorAll('#product-buttons button').forEach(button => {
    button.addEventListener('click', function () {
        // Limpiar la selección previa
        document.querySelectorAll('#product-buttons button').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');

        const type = this.getAttribute('data-product-type');
        document.getElementById('product-type').value = type;
        showAdditionalFields(type);
    });
});

function addProduct(e) {
    e.preventDefault();

    const type = document.getElementById('product-type').value;
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const id = new Date().getTime();

    let product;
    switch (type) {
        case 'computer':
            const ram = document.getElementById('product-ram').value;
            const storage = document.getElementById('product-storage').value;
            product = new Computer(id, name, price, ram, storage);
            break;
        case 'mobile':
            const screenSize = document.getElementById('product-screen-size').value;
            const batteryLife = document.getElementById('product-battery-life').value;
            product = new Mobile(id, name, price, screenSize, batteryLife);
            break;
        case 'television': 
            const tvScreenSize = document.getElementById('product-tv-screen-size').value;
            const tvResolution = document.getElementById('product-tv-resolution').value;
            product = new Television(id, name, price, tvScreenSize, tvResolution);
            break;
    }

    products.push(product);
    renderProducts();
    document.getElementById('product-form').reset();
    document.getElementById('additional-fields').innerHTML = '';
    document.querySelectorAll('#product-buttons button').forEach(btn => btn.classList.remove('selected'));
}

function renderProducts() {
    const productList = document.getElementById('products');
    productList.innerHTML = '';

    products.forEach(product => {
        const li = document.createElement('li');
        li.className = 'product-item';
        li.id = `product-${product.id}`;
        li.appendChild(document.createTextNode(product.getDetails()));

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'product-buttons';

        const editButton = document.createElement('button');
        editButton.appendChild(document.createTextNode('Editar'));
        editButton.addEventListener('click', () => editProduct(product.id));

        const deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('Eliminar'));
        deleteButton.addEventListener('click', () => deleteProduct(product.id));

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(deleteButton);
        li.appendChild(buttonsDiv);

        productList.appendChild(li);
    });
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    currentProductId = id;

    document.getElementById('product-type').value = getProductType(product);
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;

    showAdditionalFields(product);
    document.getElementById('update-button').style.display = 'block';
    document.getElementById('product-form button[type="submit"]').style.display = 'none';
}

function resetFields() {
    document.getElementById('product-type').value = '';
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('additional-fields').innerHTML = '';
}

function updateProduct() {
    const type = document.getElementById('product-type').value;
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;

    let productIndex = products.findIndex(p => p.id === currentProductId);

    let updatedProduct;
    switch (type) {
        case 'computer':
            const ram = document.getElementById('product-ram').value;
            const storage = document.getElementById('product-storage').value;
            updatedProduct = new Computer(currentProductId, name, price, ram, storage);
            break;
        case 'mobile':
            const screenSize = document.getElementById('product-screen-size').value;
            const batteryLife = document.getElementById('product-battery-life').value;
            updatedProduct = new Mobile(currentProductId, name, price, screenSize, batteryLife);
            break;
        case 'television':
            const tvScreenSize = document.getElementById('product-tv-screen-size').value;
            const tvResolution = document.getElementById('product-tv-resolution').value;
            updatedProduct = new Television(currentProductId, name, price, tvScreenSize, tvResolution);
            break;
    }

    products[productIndex] = updatedProduct;
    renderProducts();
    document.getElementById('update-button').style.display = 'none';
    document.getElementById('product-form button[type="submit"]').style.display = 'block';
    resetFields();
    document.querySelectorAll('#product-buttons button').forEach(btn => btn.classList.remove('selected'));
}

function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    renderProducts();
}

function showAdditionalFields(product) {
    const type = typeof product === 'string' ? product : getProductType(product);
    const additionalFields = document.getElementById('additional-fields');
    additionalFields.innerHTML = '';

    switch (type) {
        case 'computer':
            additionalFields.innerHTML = `
                <label for="product-ram">RAM (GB):</label>
                <input type="number" id="product-ram" value="${product.ram || ''}" required>
                <label for="product-storage">Almacenamiento (GB):</label>
                <input type="number" id="product-storage" value="${product.storage || ''}" required>
            `;
            break;
        case 'mobile':
            additionalFields.innerHTML = `
                <label for="product-screen-size">Tamaño de Pantalla (pulgadas):</label>
                <input type="number" id="product-screen-size" value="${product.screenSize || ''}" required>
                <label for="product-battery-life">Batería (horas):</label>
                <input type="number" id="product-battery-life" value="${product.batteryLife || ''}" required>
            `;
            break;
        case 'television':
            additionalFields.innerHTML = `
                <label for="product-tv-screen-size">Tamaño de Pantalla (pulgadas):</label>
                <input type="number" id="product-tv-screen-size" value="${product.screenSize || ''}" required>
                <label for="product-tv-resolution">Resolución:</label>
                <input type="text" id="product-tv-resolution" value="${product.resolution || ''}" required>
            `;
            break;
    }
}

function getProductType(product) {
    if (product instanceof Computer) return 'computer';
    if (product instanceof Mobile) return 'mobile';
    if (product instanceof Television) return 'television';
}
