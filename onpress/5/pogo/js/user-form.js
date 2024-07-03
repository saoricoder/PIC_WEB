class UserForm extends HTMLElement {
    constructor() {
        super();

        // Crear un shadow root
        this.attachShadow({ mode: 'open' });

        // Crear elementos internos del formulario
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'user-form-wrapper');

        const style = document.createElement('style');
        style.textContent = `
            .user-form-wrapper {
                max-width: 500px;
                margin: 0 auto;
                padding: 20px;
                background: #fff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
            }
            .user-form-wrapper .form-group {
                margin-bottom: 15px;
            }
            .user-form-wrapper .btn {
                width: 100%;
            }
        `;

        wrapper.innerHTML = `
            <form id="userForm">
                <div class="form-group">
                    <label for="name">Nombre:</label>
                    <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre">
                </div>
                <div class="form-group">
                    <label for="email">Correo electrónico:</label>
                    <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo electrónico">
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        `;

        this.shadowRoot.append(style, wrapper);

        this.form = this.shadowRoot.getElementById('userForm');
        this.resultDiv = document.getElementById('result');

        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        const name = this.shadowRoot.getElementById('name').value;
        const email = this.shadowRoot.getElementById('email').value;

        if (name && email) {
            this.resultDiv.textContent = `Hola ${name}, gracias por proporcionar tu correo electrónico: ${email}.`;
            this.resultDiv.style.color = '#28a745';
        } else {
            this.resultDiv.textContent = 'Por favor, completa todos los campos.';
            this.resultDiv.style.color = '#dc3545';
        }
    }
}

// Definir el nuevo elemento
customElements.define('user-form', UserForm);
