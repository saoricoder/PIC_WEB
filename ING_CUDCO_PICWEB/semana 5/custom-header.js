class CustomHeader extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:'open'});

        const header = document.createElement('header');
        const title = document.createElement('h1');
        title.textContent='Mi Pagina con Custom Elements';

        const style = document.createElement('style');
        style.textContent=`
            header{
                background-color:#333;
                color:#fff;
                padding: 20px;
                text-align:center;
            }
            h1{
                margin:0;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(header);
        header.appendChild(title)
    }
}

customElements.define('custom-header',CustomHeader);