class mostrarMensaje extends HTMLElement {
  constructor() {
    super();
    this.p = document.createElement("p");
  }
  connectedCallback() {
    const boton1 = document.getElementById("boton1");
    const boton2 = document.getElementById("boton2");
    const container1 = document.getElementById("mensaje1");
    const conatiner2 = document.getElementById("mensaje2");
    const mensaje = document.getElementById("entrada1");

    boton1.addEventListener("click", (event) => {
      event.preventDefault();
      this.p.textContent = mensaje.value;
      container1.appendChild(this.p);
    });
    boton2.addEventListener("click", (event) => {
      event.preventDefault();
      let p = document.createElement("p");
      p.textContent = mensaje.value;
      p.classList.add("stilo");
      conatiner2.innerHTML = `<style>.stilo{
      color: #ff0000;
      font-weigth: bold;
      font-style: italic;
      font-size: 3rem;
      }</style>`;
      conatiner2.appendChild(p);
    });
  }
}

customElements.define("mensaje-uno", mostrarMensaje);
