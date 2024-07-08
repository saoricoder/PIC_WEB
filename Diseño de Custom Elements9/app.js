//Definición de la clase del Custon Element
class MielementoPersonalizado extends HTMLElement{
    constructor(){
        super (); //Llama al constructor de la clase base
        //logicá de inicialización
    }

    connectedCallback(){
         //Lógica que se ejecuta cuando el elemento es INSERTADO en el DOM
         this.innerHTML=`<p>Hola soy un elemento personzalizado!</p>`;
    }

    disconnectedCallback(){
       //Lógica que se ejecuta cuando el elemento es eliminado del DOM
       console.log(`El elemento personalizado ha sido eliminado del DOM`);
    }

    attributeChangedCallback(name,oldValue,newValue){
        //Lógica que se ejecuta cuando un atributo personalizado cambia
        console.log(`El atributo ${name} ha sidocambiado de ${oldValue} a ${newValue}.`);
    }
    //Otros métodos y propiedades personalizados
}

//Se registra el Custom Element
customElements.define('mi-elemento',MielementoPersonalizado);