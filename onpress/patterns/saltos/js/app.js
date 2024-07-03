document.addEventListener('DOMContentLoaded', () => {
    let product = new Product();
    let currentProduct = product;

    const priceElement = document.getElementById('price');
    const detailsElement = document.getElementById('details');

    const updatePrice = () => {
        const priceVisitor = new PriceVisitor();
        priceElement.textContent = priceVisitor.visit(currentProduct);

        const productVisitor = new ProductVisitor();
        detailsElement.textContent = currentProduct.getDescription();
        productVisitor.visit(currentProduct);
    };

    document.getElementById('product').addEventListener('change', (event) => {
        if (event.target.value === 'premium') {
            product = new PremiumProduct();
        } else {
            product = new Product();
        }
        currentProduct = product;
        updatePrice();
    });

    document.getElementById('add-feature1').addEventListener('click', () => {
        currentProduct = new Feature1(currentProduct);
        updatePrice();
    });

    document.getElementById('add-feature2').addEventListener('click', () => {
        currentProduct = new Feature2(currentProduct);
        updatePrice();
    });

    document.getElementById('add-feature3').addEventListener('click', () => {
        currentProduct = new Feature3(currentProduct);
        updatePrice();
    });

    updatePrice();
});
