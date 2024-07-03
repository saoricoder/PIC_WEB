class MiBoton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const button = document.createElement('button');
        button.textContent = 'Botón Personalizado';

        const style = document.createElement('style');
        style.textContent = `
            button {
                background-color: #ffeb3b;
                border: none;
                color: #000;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
                border-radius: 12px;
                transition: background-color 0.3s;
            }
            button:hover {
                background-color: #fdd835;
            }
        `;

        this.shadowRoot.append(style, button);

        button.addEventListener('click', this.handleClick);
    }

    handleClick() {
        alert('¡Mensaje interaccion con Usuario!');
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
                color: #0288d1;
                text-align: center;
                margin-top: 20px;
            }
        `;

        this.shadowRoot.append(style, p);
    }
}

class MiImagen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const img = document.createElement('img');
        img.src = this.getAttribute('src') || 'img/default.jpg';
        img.alt = 'Imagen personalizada';

        const style = document.createElement('style');
        style.textContent = `
            img {
                display: block;
                margin: 20px auto;
                border-radius: 8px;
                width: 100%;
                height: auto;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                transition: transform 0.3s;
            }
            img:hover {
                transform: scale(1.05);
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
});
