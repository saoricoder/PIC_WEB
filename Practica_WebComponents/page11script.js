const section1 = document.getElementById("section");
const selection = "section-nueva";
class Section extends HTMLElement {
  //Sirve para crear el web component
  constructor() {
    super(); //LLama a las funcionalidades del padre de un objeto
    console.log("Mensaje de la consolita del constructor");
    this.p = document.createElement("p");
  } //Fin del constructor
  connectedCallback() {
    this.p.textContent = "Practicando el motodo de callback";
    this.appendChild(this.p);
  }
} //Fin de la clase elemento 1

customElements.define(selection, Section);
