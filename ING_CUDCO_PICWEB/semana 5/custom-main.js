class CustomMain extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:'open'});

        const mainDiv = document.createElement('div');
        mainDiv.textContent='Contenido Principal';

        const style = document.createElement('style');
        style.textContent=`
            div{
                background-color:#f0f0f0;
                padding; 20px;
                margin; 20px;
                border-radius: 5px;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(mainDiv);
    }
}

customElements.define('custom-main',CustomMain);