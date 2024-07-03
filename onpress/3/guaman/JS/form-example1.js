class FormExample1 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = `
            .form-container {
                display: flex;
                flex-direction: column;
                margin: 10px;
                font-family: 'Arial', sans-serif;
            }
            .form-container label {
                margin-bottom: 5px;
                font-weight: bold;
            }
            .form-container input, .form-container textarea {
                margin-bottom: 10px;
                padding: 8px;
                font-size: 14px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            .form-container button {
                padding: 10px;
                font-size: 16px;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            .form-container button:hover {
                background-color: #0056b3;
            }
            .output {
                margin-top: 10px;
                padding: 10px;
                border: 1px solid #ddd;
                background-color: #f9f9f9;
                border-radius: 4px;
            }
        `;

        const container = document.createElement('div');
        container.classList.add('form-container');

        const form = document.createElement('form');
        form.innerHTML = `
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Correo:</label>
            <input type="email" id="email" name="email" required>
            <label for="phone">Teléfono:</label>
            <input type="tel" id="phone" name="phone" required>
            <label for="address">Dirección:</label>
            <input type="text" id="address" name="address" required>
            <label for="age">Edad:</label>
            <input type="number" id="age" name="age" required>
            <label for="gender">Género:</label>
            <input type="text" id="gender" name="gender" required>
            <label for="occupation">Ocupación:</label>
            <input type="text" id="occupation" name="occupation" required>
            <label for="company">Empresa:</label>
            <input type="text" id="company" name="company" required>
            <label for="website">Sitio Web:</label>
            <input type="url" id="website" name="website">
            <label for="bio">Biografía:</label>
            <textarea id="bio" name="bio" rows="4"></textarea>
            <button type="submit">Enviar</button>
        `;

        const outputContainer = document.createElement('div');
        outputContainer.classList.add('output-container');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = this.shadowRoot.querySelector('#name').value;
            const email = this.shadowRoot.querySelector('#email').value;
            const phone = this.shadowRoot.querySelector('#phone').value;
            const address = this.shadowRoot.querySelector('#address').value;
            const age = this.shadowRoot.querySelector('#age').value;
            const gender = this.shadowRoot.querySelector('#gender').value;
            const occupation = this.shadowRoot.querySelector('#occupation').value;
            const company = this.shadowRoot.querySelector('#company').value;
            const website = this.shadowRoot.querySelector('#website').value;
            const bio = this.shadowRoot.querySelector('#bio').value;

            const output = document.createElement('div');
            output.classList.add('output');
            output.innerHTML = `
                <strong>Nombre:</strong> ${name}<br>
                <strong>Correo:</strong> ${email}<br>
                <strong>Teléfono:</strong> ${phone}<br>
                <strong>Dirección:</strong> ${address}<br>
                <strong>Edad:</strong> ${age}<br>
                <strong>Género:</strong> ${gender}<br>
                <strong>Ocupación:</strong> ${occupation}<br>
                <strong>Empresa:</strong> ${company}<br>
                <strong>Sitio Web:</strong> ${website}<br>
                <strong>Biografía:</strong> ${bio}
            `;

            outputContainer.appendChild(output);
        });

        container.appendChild(form);
        container.appendChild(outputContainer);
        this.shadowRoot.append(style, container);
    }
}

customElements.define('form-example1', FormExample1);

