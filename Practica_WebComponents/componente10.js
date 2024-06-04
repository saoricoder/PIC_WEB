class Elemento1 extends HTMLElement{//Sirve para crear el web component
    constructor ()
    {
        super();//LLama a las funcionalidades del padre de un objeto
        console.log("Mensaje de la consolita del constructor");
        this.p=document.createElement('p');
        
    } //Fin del constructor
    connectedCallback(){
        this.p.textContent="Estamos en el metodo ConnectedCallBack";
        this.appendChild(this.p);
    }
} //Fin de la clase elemento 1

customElements.define('etiqueta-uno',Elemento1);