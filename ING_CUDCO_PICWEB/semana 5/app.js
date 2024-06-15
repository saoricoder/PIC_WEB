class BotonPersonalizado extends HTMLElement{
    constructor(){
        super();

        const btn = document.createElement('button');

        btn.textContent = 'Boton Personalizado';

        btn.addEventListener('click',()=>{
            alert("Hola desde el boton personalizado");
        });

        this.appendChild(btn);
    }
}

window.customElements.define('mi-boton',BotonPersonalizado);