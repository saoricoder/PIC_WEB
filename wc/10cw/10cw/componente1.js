class Elemento1 extends HTMLElement {
    constructor() {
            super();
            console.log("Elemento1 constructor .... toy constructor  ");
            this.p = document.createElement('p'); // nuevo elemento 

        } //---fin del constructor
    connectedCallback() {
            this.p.textContent = "Connectando al Element del HTML DOM  desde JS";
            this.appendChild(this.p);
            
        } // ---fin metodo connectedCallback

} //------fin de la clase Web Componente

customElements.define('elemento-uno', Elemento1);