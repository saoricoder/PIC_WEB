class MyDiv extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.className = 'container';
        container.textContent = 'Contenedor personalizado desde Shadow Dom';

        const style = document.createElement('style');
        style.textContent=`
            .my-div{
                font-size: 20px;
                font-family: Arial, Helvetica, sans-serif;
                color: white;
                background-color: #acaf50;
                padding: 20px;
                border-radius: 5px;
                text-align: center;
                border: 2px solid #4CAF50;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(container);        

        //const linkStyle = document.createElement('link');
        //linkStyle.setAttribute('rel','stylesheet');
        //linkStyle.setAttribute('href',"estilo.css");
        //shadow.appendChild(linkStyle);


    }
}

window.customElements.define('my-div',MyDiv);