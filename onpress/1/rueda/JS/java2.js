class ValidarEmail {
    constructor() {
        this.email = '';
    }

    readInput() {
        this.email = document.getElementById('email').value;
    }

    validate() {
        this.readInput();
        const mensaje = document.getElementById('mensaje');
        const resultado = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!resultado.test(this.email)) {
            mensaje.textContent = 'Correo electrónico inválido.';
            mensaje.style.color = 'red';
            return;
        }

        mensaje.textContent = 'Correo electrónico válido.';
        mensaje.style.color = 'green';
    }
}

const Validaremail = new ValidarEmail();
