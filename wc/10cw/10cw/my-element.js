const template = document.createElement("div");
template.innerHTML = `
  <style>
    .texto {
      color: red;
    }
    p {
      color: blue;
    }
  </style>
  <p class="texto" id="template1">Parrafo 1:  template fuera de la Clase</p>
  <p id="template2">Parrafo 2</p>
`;

class myElement extends HTMLElement {
    constructor() {
        super();
        this.p = document.createElement("p");
    }
    connectedCallback() {
        this.p.textContent = "CONTENIDOS DEL PARRAFO !";
        this.appendChild(this.p);
        this.appendChild(template);
    }
}
customElements.define("elemento-uno", myElement);