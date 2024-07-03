class CustomForm extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const form = document.createElement('form');
        form.classList.add('custom-form');

        const style = document.createElement('style');
        style.textContent = `
            .custom-form {
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-width: 300px;
                margin: auto;
                padding: 20px;
                border: 2px solid #ccc;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            .custom-form input, .custom-form button {
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }

            .custom-form input:focus, .custom-form button:focus {
                border-color: #0066cc;
                outline: none;
            }

            .custom-form button {
                background-color: #0066cc;
                color: white;
                cursor: pointer;
            }

            .custom-form button:hover {
                background-color: #005bb5;
            }
        `;

        const nameLabel = document.createElement('label');
        nameLabel.textContent = 'Nombre:';
        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('name', 'name');

        const emailLabel = document.createElement('label');
        emailLabel.textContent = 'Correo Electrónico:';
        const emailInput = document.createElement('input');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('name', 'email');

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Enviar';
        submitButton.setAttribute('type', 'submit');

        form.appendChild(nameLabel);
        form.appendChild(nameInput);
        form.appendChild(emailLabel);
        form.appendChild(emailInput);
        form.appendChild(submitButton);

        shadow.appendChild(style);
        shadow.appendChild(form);
    }
}

customElements.define('custom-form', CustomForm);
