class CustomFooter extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:'open'});

        const footer = document.createElement('footer');
        const paragraph = document.createElement('p');
        paragraph.textContent = '© 2024 Todos los derechos reservados';

        const style = document.createElement('style');
        style.textContent=`
            footer{
                background-color:#333;
                color:#fff;
                padding: 10px 0;
                text-align:center;
                bottom:0;
                width:100%;
                position:fixed;
            }
        `;
        shadow.appendChild(style);
        shadow.appendChild(footer);
        footer.appendChild(paragraph);
    }   
}

window.customElements.define('custom-footer',CustomFooter);
