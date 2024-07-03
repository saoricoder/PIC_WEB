class NumberValidator {
    constructor(number) {
        this.number = number;
    }

    isPrime() {
        if (this.number <= 1) return false;
        for (let i = 2; i < this.number; i++) {
            if (this.number % i === 0) return false;
        }
        return true;
    }

    isEven() {
        return this.number % 2 === 0;
    }

    isOdd() {
        return this.number % 2 !== 0;
    }

    getResult() {
        if (this.isPrime()) return `${this.number} es un número primo.`;
        if (this.isEven()) return `${this.number} es un número par.`;
        if (this.isOdd()) return `${this.number} es un número impar.`;
    }
}

function validateNumber() {
    const number = parseInt(document.getElementById('numberInput').value);
    const validator = new NumberValidator(number);
    document.getElementById('result').innerText = validator.getResult();
}
