class Calcular extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Crear un contenedor para los estilos y la funcionalidad
        const container = document.createElement('div');
        container.innerHTML = `
        <style>
          /* Estilos del componente */
           :host {
            display: block;
            margin-top: 10px;
            font-size: xxx-large;
            text-align: center;
            border-style: double;
          }
        </style>
        <div>
          <input type="text" id="txtn1" placeholder="Número 1"> <br>        
          <input type="text" id="txtn2" placeholder="Número 2"> <br>
          <input type="text" id="txtres" placeholder="Resultado" readonly><br>
          <button id="btnSumar">Sumar</button>
          <button id="btnRestar">Restar</button>
          <button id="btnMultiplicar">Multiplicar</button>
          <button id="btnDividir">Dividir</button>                    
        </div>
      `;

        this.shadowRoot.appendChild(container);
    }

    connectedCallback() {
        // Obtener referencia a los botones y añadir los listeners de clic
        this.shadowRoot.getElementById('btnSumar').addEventListener('click', () => this.calcular('sumar'));
        this.shadowRoot.getElementById('btnRestar').addEventListener('click', () => this.calcular('restar'));
        this.shadowRoot.getElementById('btnMultiplicar').addEventListener('click', () => this.calcular('multiplicar'));
        this.shadowRoot.getElementById('btnDividir').addEventListener('click', () => this.calcular('dividir'));
    }

    calcular(operacion) {
        // Obtener los valores de los inputs
        const n1 = parseFloat(this.shadowRoot.querySelector('#txtn1').value);
        const n2 = parseFloat(this.shadowRoot.querySelector('#txtn2').value);

        // Comprobar si los valores son números válidos
        if (isNaN(n1) || isNaN(n2)) {
            alert('Por favor, introduce números válidos');
            return;
        }

        // Realizar la operación correspondiente
        let resultado;
        switch (operacion) {
            case 'sumar':
                resultado = n1 + n2;
                break;
            case 'restar':
                resultado = n1 - n2;
                break;
            case 'multiplicar':
                resultado = n1 * n2;
                break;
            case 'dividir':
                resultado = n1 / n2;
                break;
            default:
                return;
        }

        // Mostrar el resultado en el input de resultado
        this.shadowRoot.querySelector('#txtres').value = resultado;
    }
}

// Definir el nuevo elemento personalizado
customElements.define('componente-calcular', Calcular);