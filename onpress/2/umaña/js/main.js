document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Labial Rojo",
            price: "$12.99",
            image: "assets/images/labialrojo.webp"
        },
        {
            name: "Base de Maquillaje",
            price: "$24.99",
            image: "assets/images/base.jpg"
        },
        {
            name: "Rimel",
            price: "$24.99",
            image: "assets/images/rimel.jpg"
        }
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-4', 'product-card');

        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <button class="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>
        `;

        productList.appendChild(productCard);
    });
});
