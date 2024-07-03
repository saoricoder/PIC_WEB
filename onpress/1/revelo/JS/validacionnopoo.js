function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 !== 0;
}

function getResult(number) {
    if (isPrime(number)) return `${number} es un número primo.`;
    if (isEven(number)) return `${number} es un número par.`;
    if (isOdd(number)) return `${number} es un número impar.`;
}

function validateNumber() {
    const number = parseInt(document.getElementById('numberInput').value);
    const result = getResult(number);
    document.getElementById('result').innerText = result;
}
