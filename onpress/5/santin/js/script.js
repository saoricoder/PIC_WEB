class MiBoton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const button = document.createElement('button');
        button.textContent = 'Botón Personalizado';

        const style = document.createElement('style');
        style.textContent = `
            button {
                background-color: #28a745;
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 10px 0;
                cursor: pointer;
                border-radius: 12px;
                transition: background-color 0.3s;
            }

            button:hover {
                background-color: #218838;
            }
        `;

        this.shadowRoot.append(style, button);

        button.addEventListener('click', this.handleClick);
    }

    handleClick() {
        alert('¡Botón personalizado clickeado!');
    }
}

class MiTexto extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const p = document.createElement('p');
        p.textContent = 'Texto personalizado';

        const style = document.createElement('style');
        style.textContent = `
            p {
                font-size: 20px;
                color: #343a40;
                text-align: center;
                margin: 10px 0;
            }
        `;

        this.shadowRoot.append(style, p);
    }

    setText(content) {
        this.shadowRoot.querySelector('p').textContent = content;
    }
}

class MiImagen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const img = document.createElement('img');
        img.src = 'img/imagen.jpg';
        img.alt = 'Imagen personalizada';

        const style = document.createElement('style');
        style.textContent = `
            img {
                display: block;
                margin: 20px auto;
                border-radius: 8px;
                width: 100%;
                height: auto;
            }
        `;

        this.shadowRoot.append(style, img);
    }
}

customElements.define('mi-boton', MiBoton);
customElements.define('mi-texto', MiTexto);
customElements.define('mi-imagen', MiImagen);

document.getElementById('customForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mensaje = document.getElementById('txtMensaje').value;
    const output = document.getElementById('output');
    output.textContent = `Mensaje ingresado: ${mensaje}`;

    const customText = document.querySelector('mi-texto');
    customText.setText(mensaje);
});
