class TaskItem extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML=`
            <style>
                /*Estilos de componenete*/
                /*Estilos encapsulados en el shadow DOM*/
            </style>
            <div id="task">
                <span id="task-tittle"></span>
                <button id="detele-btn"></button>
            </div>
        `;
        this.taskTitleElement=this.shadowRoot.getElementById('task-title');
        this.deleteButton=this.shadowRoot.getElementById('detele-btn');
    }

    connectedCallback(){
        //Se ejecuta cuando elcomponete es insertado en el DOM
        this.taskTitleElement.textContent=this.getAttribute('title');
        this.deleteButton.addEventListener('click',()=>this.deleteTask());
    }

    disconnectedCallback(){
        //Se ejecuta cuando el ocmponente es eliminado del DOM
        this.deleteButton.removeEventListener('click',()=>this.deleteTask());
    }

    deleteTask(){
        //Método para eliminar la tarea
        this.parentNode.removeChild(this);
    }
}
    //Ejemplo de uso: creación de elementos<task-item>
    const taskListContainer=document.getElementById('task-list');

    function addTask(title) {
        const taskItem=document.createElement('task-item');
        taskItem.setAttribute('title',title);
        taskListContainer.appendChild(taskItem);
    }

    //Agregar tareas de ejemplo
    addTask('Hacer la compra');
    addTask('Preparar la presentación');
    addTask('Llamar al cliente');
