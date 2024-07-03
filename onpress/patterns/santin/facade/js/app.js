document.addEventListener("DOMContentLoaded", function () {
    // Creamos una instancia de la clase UserAPI que actúa como la fachada.
    const userAPI = new UserAPI();

    // Obtenemos referencias a los elementos del DOM.
    const userForm = document.getElementById('userForm');
    const userNameInput = document.getElementById('userName');
    const userList = document.getElementById('userList');
    const facadeExplanation = document.getElementById('facadeExplanation');

    // Agregamos la explicación del patrón Facade al DOM.
    facadeExplanation.innerHTML = `
        <h2>Explicación del Patrón Façade</h2>
        <p>El Patrón Façade proporciona una interfaz simplificada a un subsistema complejo. En esta aplicación, la clase <strong>UserAPI</strong> actúa como una fachada para la gestión de usuarios. Proporciona métodos para agregar usuarios, obtener información de usuarios y recuperar todos los usuarios.</p>
        <p>Este patrón ayuda a ocultar la complejidad del subsistema y proporciona una interfaz simple para el código cliente.</p>
        <p>A continuación, puede agregar un usuario y ver la lista de usuarios gestionados por la fachada UserAPI.</p>
    `;

    // Escuchamos el evento de envío del formulario.
    userForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userName = userNameInput.value;

        if (userName) {
            // Creamos un nuevo usuario y lo agregamos usando la fachada.
            const newUser = { id: Date.now(), name: userName };
            userAPI.addUser(newUser);
            updateUserList();
            userNameInput.value = '';
        }
    });

    // Función para actualizar la lista de usuarios en el DOM.
    function updateUserList() {
        // Limpiamos la lista de usuarios en el DOM.
        userList.innerHTML = '<h2>Lista de Usuarios</h2>';

        // Obtenemos todos los usuarios usando la fachada.
        const users = userAPI.getAllUsers();

        // Iteramos sobre los usuarios y los agregamos al DOM.
        users.forEach(user => {
            const userItem = document.createElement('div');
            userItem.textContent = `ID: ${user.id}, Nombre: ${user.name}`;
            userList.appendChild(userItem);
        });
    }

    // Inicializamos la lista de usuarios en el DOM.
    updateUserList();
});
