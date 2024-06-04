const template = document.createElement('div');
template.innerHTML = `
    <style>
        .textos{
            color:red;
            background-color:yellow:
        }
        p{
            color:yellow;
            background-color:blue;
        }
    </style>
    <p class="textos">template simulado en objeto literal</p>
    <p>parrafo simple dentro del template simulado </p>
`;



class Elemento1 extends HTMLElement {
    constructor() {
        super();
        console.log("Elemento1 constructor ");
        this.p = document.createElement('p');
    }
    connectedCallback() {
        this.p.textContent = "Connectando al Element del HTML DOM  desde JS";
        this.appendChild(this.p);
        this.appendChild(template);
    }

}

customElements.define('elemento-uno', Elemento1);