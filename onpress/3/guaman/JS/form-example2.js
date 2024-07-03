class FormExample2 extends HTMLElement {
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
            .form-container input, .form-container textarea, .form-container select {
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
            <label for="fullname">Nombre Completo:</label>
            <input type="text" id="fullname" name="fullname" required>
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>
            <label for="phone">Teléfono:</label>
            <input type="tel" id="phone" name="phone" required>
            <label for="destination">Destino:</label>
            <input type="text" id="destination" name="destination" required>
            <label for="departure-date">Fecha de Salida:</label>
            <input type="date" id="departure-date" name="departure-date" required>
            <label for="return-date">Fecha de Regreso:</label>
            <input type="date" id="return-date" name="return-date" required>
            <label for="adults">Número de Adultos:</label>
            <input type="number" id="adults" name="adults" min="1" required>
            <label for="children">Número de Niños:</label>
            <input type="number" id="children" name="children" min="0" required>
            <label for="travel-type">Tipo de Viaje:</label>
            <select id="travel-type" name="travel-type" required>
                <option value="leisure">Ocio</option>
                <option value="business">Negocios</option>
            </select>
            <label for="special-requests">Peticiones Especiales:</label>
            <textarea id="special-requests" name="special-requests"></textarea>
            <button type="submit">Enviar</button>
        `;

        const outputContainer = document.createElement('div');
        outputContainer.classList.add('output-container');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullname = this.shadowRoot.querySelector('#fullname').value;
            const email = this.shadowRoot.querySelector('#email').value;
            const phone = this.shadowRoot.querySelector('#phone').value;
            const destination = this.shadowRoot.querySelector('#destination').value;
            const departureDate = this.shadowRoot.querySelector('#departure-date').value;
            const returnDate = this.shadowRoot.querySelector('#return-date').value;
            const adults = this.shadowRoot.querySelector('#adults').value;
            const children = this.shadowRoot.querySelector('#children').value;
            const travelType = this.shadowRoot.querySelector('#travel-type').value;
            const specialRequests = this.shadowRoot.querySelector('#special-requests').value;

            const output = document.createElement('div');
            output.classList.add('output');
            output.innerHTML = `
                <strong>Nombre Completo:</strong> ${fullname}<br>
                <strong>Correo Electrónico:</strong> ${email}<br>
                <strong>Teléfono:</strong> ${phone}<br>
                <strong>Destino:</strong> ${destination}<br>
                <strong>Fecha de Salida:</strong> ${departureDate}<br>
                <strong>Fecha de Regreso:</strong> ${returnDate}<br>
                <strong>Número de Adultos:</strong> ${adults}<br>
                <strong>Número de Niños:</strong> ${children}<br>
                <strong>Tipo de Viaje:</strong> ${travelType}<br>
                <strong>Peticiones Especiales:</strong> ${specialRequests}
            `;

            outputContainer.appendChild(output);
        });

        container.appendChild(form);
        container.appendChild(outputContainer);
        this.shadowRoot.append(style, container);
    }
}

customElements.define('form-example2', FormExample2);
