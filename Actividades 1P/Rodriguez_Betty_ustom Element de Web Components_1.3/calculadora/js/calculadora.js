
class Calculadora extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Crear un contenedor para los estilos y la funcionalidad
    const container = document.createElement("div");
    container.innerHTML = `
        <style>
          /* Estilos del componente */
          :host {
            display: block;
            margin-top: 10px;
          }
        </style>
        <h1>Resultado</h1>
      `;

    this.shadowRoot.appendChild(container);
  }

  connectedCallback() {
    // Obtener referencia a los botones y añadir los listeners de clic
    const btnSumar = document.querySelector("#btnSumar");
    const btnRestar = document.querySelector("#btnRestar");
    const btnMultiplicar = document.querySelector("#btnMultiplicar");
    const btnDividir = document.querySelector("#btnDividir");

    if (btnSumar)
      btnSumar.addEventListener("click", (event) => {
        event.preventDefault();
        this.operar("sumar");
      });
    if (btnRestar)
      btnRestar.addEventListener("click", (event) => {
        event.preventDefault();
        this.operar("restar");
      });
    if (btnMultiplicar)
      btnMultiplicar.addEventListener("click", (event) => {
        event.preventDefault();
        this.operar("multiplicar");
      });
    if (btnDividir)
      btnDividir.addEventListener("click", (event) => {
        event.preventDefault();
        this.operar("dividir");
      });
  }

  operar(operacion) {
    // Obtener los valores de los inputs
    const n1 = parseFloat(document.querySelector("#txtn1").value);
    const n2 = parseFloat(document.querySelector("#txtn2").value);

    // Comprobar si los valores son números válidos
    if (isNaN(n1) || isNaN(n2)) {
      alert("Por favor, introduce números válidos");
      return;
    }

    // Comprobar si los valores están en el rango de 1 a 100
    if (n1 < 1 || n1 > 100 || n2 < 1 || n2 > 100) {
      alert("Por favor, introduce números entre 1 y 100");
      return;
    }

    let resultado;
    // Realizar la operación correspondiente
    switch (operacion) {
      case "sumar":
        resultado = n1 + n2;
        break;
      case "restar":
        resultado = n1 - n2;
        break;
      case "multiplicar":
        resultado = n1 * n2;
        break;
      case "dividir":
        if (n2 === 0) {
          alert("No se puede dividir por cero");
          return;
        }
        resultado = n1 / n2;
        break;
      default:
        alert("Operación no válida");
        return;
    }

    // Mostrar el resultado en el input de resultado
    const host = document.getElementById("host");
    const shadow = host.shadowRoot || host.attachShadow({ mode: "open" });
    shadow.innerHTML = `<h1>Resultado: ${resultado}</h1>`;
  }
}

// Definir el nuevo elemento personalizado
customElements.define("componente-calculadora", Calculadora);

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
});
