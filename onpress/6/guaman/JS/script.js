// Definición de la clase para el componente web 'MouseArea'
class MouseArea extends HTMLElement {
    constructor() {
        super(); // Llama al constructor de la clase HTMLElement
        this.attachShadow({ mode: 'open' }); // Crea un shadow DOM abierto para el componente
        this.shadowRoot.innerHTML = `
            <div id="mouseArea" class="box">Click aqui</div> <!-- Contenido del shadow DOM -->
            <style>
                .box {
                    width: 100%;
                    height: 100px;
                    background-color: #e7f7e7;
                    text-align: center;
                    line-height: 100px;
                    margin-bottom: 20px;
                    border: 2px solid #4CAF50;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .box:hover {
                    background-color: #d4e8d4;
                }
            </style>
        `;
    }

    connectedCallback() {
        this.mouseArea = this.shadowRoot.getElementById('mouseArea'); // Obtiene el elemento del shadow DOM por su ID
        // Añade event listeners para los eventos de mouse
        this.mouseArea.addEventListener('mouseenter', this.onMouseEnter.bind(this));
        this.mouseArea.addEventListener('mouseleave', this.onMouseLeave.bind(this));
        this.mouseArea.addEventListener('click', this.onMouseClick.bind(this));
    }

    onMouseEnter() {
        this.mouseArea.style.backgroundColor = '#d4e8d4'; // Cambia el color de fondo al pasar el ratón por encima
    }

    onMouseLeave() {
        this.mouseArea.style.backgroundColor = '#e7f7e7'; // Restaura el color de fondo al salir el ratón
    }

    onMouseClick() {
        alert('Box clicked!'); // Muestra una alerta al hacer clic en el área
    }
}

// Definición de la clase para el componente web 'FormComponent'
class FormComponent extends HTMLElement {
    constructor() {
        super(); // Llama al constructor de la clase HTMLElement
        this.attachShadow({ mode: 'open' }); // Crea un shadow DOM abierto para el componente
        this.shadowRoot.innerHTML = `
            <form id="exampleForm" class="form">
                <div class="form-group">
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="age">Edad:</label>
                    <input type="number" id="age" name="age" required>
                </div>
                <div class="form-group">
                    <label for="gender">Sexo:</label>
                    <select id="gender" name="gender" required>
                        <option value="">Seleccionar...</option>
                        <option value="male">M</option>
                        <option value="female">F</option>
                        <option value="other">Otros</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="comments">Comentarios:</label>
                    <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                </div>
                <button type="submit" class="btn">Enviar</button>
            </form>
            <style>
                /* Estilos para el formulario dentro del shadow DOM */
                .form {
                    display: flex;
                    flex-direction: column;
                }
                .form-group {
                    margin-bottom: 15px;
                }
                label {
                    font-weight: bold;
                    margin-bottom: 5px;
                    display: block;
                }
                input, select, textarea {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
                input:focus, select:focus, textarea:focus {
                    border-color: #4CAF50;
                    outline: none;
                }
                .btn {
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .btn:hover {
                    background-color: #45a049;
                }
            </style>
        `;
    }

    connectedCallback() {
        this.form = this.shadowRoot.getElementById('exampleForm'); // Obtiene el formulario del shadow DOM por su ID
        this.form.addEventListener('submit', this.onFormSubmit.bind(this)); // Añade un event listener para el evento de envío del formulario
    }

    onFormSubmit(event) {
        event.preventDefault(); // Previene el envío del formulario
        // Obtiene los valores de los campos del formulario desde el shadow DOM
        const name = this.shadowRoot.getElementById('name').value;
        const email = this.shadowRoot.getElementById('email').value;
        const age = this.shadowRoot.getElementById('age').value;
        const gender = this.shadowRoot.getElementById('gender').value;
        const comments = this.shadowRoot.getElementById('comments').value;
        // Muestra una alerta con los valores del formulario
        alert(`Form submitted with:\nName: ${name}\nEmail: ${email}\nAge: ${age}\nGender: ${gender}\nComments: ${comments}`);
    }
}

// Definición de la clase para el componente web 'KeyboardInput'
class KeyboardInput extends HTMLElement {
    constructor() {
        super(); // Llama al constructor de la clase HTMLElement
        this.attachShadow({ mode: 'open' }); // Crea un shadow DOM abierto para el componente
        this.shadowRoot.innerHTML = `
            <input type="text" id="keyboardInput" class="keyboard-input" placeholder="Ingrese comentarios">
            <style>
                /* Estilos para el campo de entrada de texto dentro del shadow DOM */
                .keyboard-input {
                    width: 100%;
                    padding: 10px;
                    margin: 20px 0;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }
            </style>
        `;
    }

    connectedCallback() {
        this.keyboardInput = this.shadowRoot.getElementById('keyboardInput'); // Obtiene el campo de entrada de texto del shadow DOM por su ID
        this.keyboardInput.addEventListener('keydown', this.onKeyDown.bind(this)); // Añade un event listener para el evento de teclado 'keydown'
    }

    onKeyDown(event) {
        console.log(`Key pressed: ${event.key}`); // Muestra en consola la tecla presionada
    }
}

// Definición de la clase para el componente web 'DomManipulation'
class DomManipulation extends HTMLElement {
    constructor() {
        super(); // Llama al constructor de la clase HTMLElement
        this.attachShadow({ mode: 'open' }); // Crea un shadow DOM abierto para el componente
        this.shadowRoot.innerHTML = `
            <div id="domManipulation" class="dom-manipulation">
                <p>Este texto cambiará</p>
                <button id="changeTextBtn" class="btn">Cambiar texto</button>
            </div>
            <style>
                /* Estilos para el componente de manipulación del DOM dentro del shadow DOM */
                .dom-manipulation p {
                    color: #333;
                }
                .dom-manipulation p.changed {
                    color: #ff5722;
                }
            </style>
        `;
    }

    connectedCallback() {
        this.changeTextBtn = this.shadowRoot.getElementById('changeTextBtn'); // Obtiene el botón del shadow DOM por su ID
        this.domText = this.shadowRoot.querySelector('#domManipulation p'); // Obtiene el párrafo del shadow DOM dentro de '#domManipulation'
        this.changeTextBtn.addEventListener('click', this.onChangeTextClick.bind(this)); // Añade un event listener para el evento de clic en el botón
    }

    onChangeTextClick() {
        this.domText.textContent = 'The text has been changed!'; // Cambia el texto del párrafo dentro del shadow DOM
        this.domText.classList.toggle('changed'); // Alterna la clase 'changed' en el párrafo dentro del shadow DOM
    }
}

// Registra los componentes web personalizados con sus respectivos nombres
customElements.define('mouse-area', MouseArea);
customElements.define('form-component', FormComponent);
customElements.define('keyboard-input', KeyboardInput);
customElements.define('dom-manipulation', DomManipulation);

// Evento que se dispara cuando el DOM ha sido completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // No hay instancia directa de
        new EventHandling();
    });