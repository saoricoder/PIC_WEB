class Elemento1 extends HTMLElement{
    constructor(){
        super();
        console.log("estamos en el constructor");
        this.p=document.createElement("p");
    }
    connectedCallback(){
        this.p.textContent="este es un parrafo dentro del connectedCallback";
        this.appendChild(this.p);
    }
}
customElements.define("elemento-uno",Elemento1);
//customElements.define("etiqueta-personalizada",ClaseComponent);