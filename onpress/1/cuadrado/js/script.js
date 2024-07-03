class EmailValidator {
    constructor() {
        this.emailInput = document.getElementById('emailInput');
        this.resultMessage = document.getElementById('resultMessage');
        this.emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.validateBtn = document.getElementById('validateBtn');

        this.validateBtn.addEventListener('click', this.validateEmail.bind(this));
    }

    validateEmail() {
        if (!this.emailInput.value.includes('@')) {
            this.resultMessage.innerText = 'Porfavor incluye un @ en tu correo.';
            this.resultMessage.style.color = 'red';
            return;
        }

        if (this.emailPattern.test(this.emailInput.value)) {
            this.resultMessage.innerText = 'Correo Valido!';
            this.resultMessage.style.color = 'green';
        } else {
            this.resultMessage.innerText = 'Correo Invalido!';
            this.resultMessage.style.color = 'red';
        }
    }
}

const emailValidator = new EmailValidator();
