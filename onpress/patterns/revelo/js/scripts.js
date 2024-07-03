// scripts.js

// Clases del patrón Filter
class Product {
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}

class Criteria {
    meetCriteria(products) {
        throw new Error("This method must be overwritten!");
    }
}

class CategoryCriteria extends Criteria {
    constructor(category) {
        super();
        this.category = category;
    }

    meetCriteria(products) {
        return products.filter(product => product.category === this.category);
    }
}

class MinPriceCriteria extends Criteria {
    constructor(minPrice) {
        super();
        this.minPrice = minPrice;
    }

    meetCriteria(products) {
        return products.filter(product => product.price >= this.minPrice);
    }
}

class AndCriteria extends Criteria {
    constructor(criteria, otherCriteria) {
        super();
        this.criteria = criteria;
        this.otherCriteria = otherCriteria;
    }

    meetCriteria(products) {
        let firstCriteriaProducts = this.criteria.meetCriteria(products);
        return this.otherCriteria.meetCriteria(firstCriteriaProducts);
    }
}

// Clases del patrón Strategy
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(num1, num2) {
        return this.strategy.doOperation(num1, num2);
    }
}

class Strategy {
    doOperation(num1, num2) {
        throw new Error("This method must be overwritten!");
    }
}

class OperationAdd extends Strategy {
    doOperation(num1, num2) {
        return num1 + num2;
    }
}

class OperationSubtract extends Strategy {
    doOperation(num1, num2) {
        return num1 - num2;
    }
}

class OperationMultiply extends Strategy {
    doOperation(num1, num2) {
        return num1 * num2;
    }
}

// Crear productos
const products = [
    new Product("Laptop", "Electronicos", 1000),
    new Product("Celular", "Electronicos", 500),
    new Product("Tablet", "Electronicos", 650),
    new Product("Camiseta", "Ropa", 50),
    new Product("Jeans", "Ropa", 70)
];

// Mostrar productos
const productList = document.getElementById('product-list');
products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - ${product.category} - $${product.price}`;
    productList.appendChild(li);
});

// Filtrar productos
function filterProducts() {
    const electronicsCriteria = new CategoryCriteria("Electronicos");
    const minPriceCriteria = new MinPriceCriteria(600);
    const electronicsAndMinPrice = new AndCriteria(electronicsCriteria, minPriceCriteria);

    const filteredProducts = electronicsAndMinPrice.meetCriteria(products);

    const filteredList = document.getElementById('filtered-list');
    filteredList.innerHTML = '';
    filteredProducts.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.category} - $${product.price}`;
        filteredList.appendChild(li);
    });
}

// Usar estrategias
function performAddition() {
    const contextAdd = new Context(new OperationAdd());
    const result = contextAdd.executeStrategy(10, 5);
    displayStrategyResult("10 + 5 = " + result);
}

function performSubtraction() {
    const contextSubtract = new Context(new OperationSubtract());
    const result = contextSubtract.executeStrategy(10, 5);
    displayStrategyResult("10 - 5 = " + result);
}

function performMultiplication() {
    const contextMultiply = new Context(new OperationMultiply());
    const result = contextMultiply.executeStrategy(10, 5);
    displayStrategyResult("10 * 5 = " + result);
}

function displayStrategyResult(result) {
    const strategyList = document.getElementById('strategy-list');
    const li = document.createElement('li');
    li.textContent = result;
    strategyList.appendChild(li);
}
