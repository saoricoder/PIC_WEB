class MenuPersonalizado extends HTMLElement{
    constructor(){
        super();

        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');

        const opcionesMenu = ['Inicio','Productos','Servicios','Contacto'];

        opcionesMenu.forEach(op=>{
            const item = document.createElement('li');
            item.textContent=op;
            menuContainer.appendChild(item);
        });

        this.appendChild(menuContainer);
    }
}

window.customElements.define('mi-menu',MenuPersonalizado);