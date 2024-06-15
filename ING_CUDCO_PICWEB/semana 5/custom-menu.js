class CustomMenu extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:'open'});

        const menu = document.createElement('ul');

        const opcionesMenu = ['Inicio','Productos','Servicios','Contacto'];

        opcionesMenu.forEach(item=>{
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href='#';
            link.textContent=item;
            listItem.appendChild(link);
            menu.appendChild(listItem);
        });

        const style = document.createElement('style');
        style.textContent=`
            ul{
                list-style-type:none;
                margin:0;
                padding:0;
                overflow:hidden;
                background-color:#333;
            }
            li{
                float:left;                
            }
            li a{
                display:block;
                color:white;
                text-align:center;
                padding: 14px 16px;
                text-decoration: none;
            }
            li a:hover{
                background-color:#111;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(menu);

    }
}

customElements.define('custom-menu',CustomMenu);