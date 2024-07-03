class Product {
    constructor() {
        this.price = 10;
        this.description = "Producto Básico";
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.description;
    }
}

class PremiumProduct extends Product {
    constructor() {
        super();
        this.price = 20;
        this.description = "Producto Premium";
    }
}

class ProductDecorator {
    constructor(product) {
        this.product = product;
    }

    getPrice() {
        return this.product.getPrice();
    }

    getDescription() {
        return this.product.getDescription();
    }
}

class Feature1 extends ProductDecorator {
    getPrice() {
        return super.getPrice() + 5;
    }

    getDescription() {
        return super.getDescription() + ', con Característica 1';
    }
}

class Feature2 extends ProductDecorator {
    getPrice() {
        return super.getPrice() + 7;
    }

    getDescription() {
        return super.getDescription() + ', con Característica 2';
    }
}

class Feature3 extends ProductDecorator {
    getPrice() {
        return super.getPrice() + 10;
    }

    getDescription() {
        return super.getDescription() + ', con Característica 3';
    }
}
