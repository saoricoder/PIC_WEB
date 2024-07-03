class PriceVisitor {
    visit(product) {
        return product.getPrice();
    }

    visitFeature1(feature1) {
        return feature1.getPrice();
    }

    visitFeature2(feature2) {
        return feature2.getPrice();
    }

    visitFeature3(feature3) {
        return feature3.getPrice();
    }
}

class ProductVisitor {
    visit(product) {
        console.log(`Visitando producto con precio: ${product.getPrice()}`);
    }

    visitFeature1(feature1) {
        console.log(`Visitando característica 1 con precio: ${feature1.getPrice()}`);
    }

    visitFeature2(feature2) {
        console.log(`Visitando característica 2 con precio: ${feature2.getPrice()}`);
    }

    visitFeature3(feature3) {
        console.log(`Visitando característica 3 con precio: ${feature3.getPrice()}`);
    }
}
