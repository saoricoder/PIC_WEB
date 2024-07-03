document.addEventListener("DOMContentLoaded", function () {
    // Creamos una instancia de la clase UserDAO que actúa como el DAO.
    const userDAO = new UserDAO();

    // Obtenemos referencias a los elementos del DOM.
    const userForm = document.getElementById('userForm');
    const userIdInput = document.getElementById('userId');
    const userNameInput = document.getElementById('userName');
    const userList = document.getElementById('userList');
    const daoExplanation = document.getElementById('daoExplanation');

    // Agregamos la explicación del patrón DAO al DOM.
    daoExplanation.innerHTML = `
        <h2>Explicación del Patrón DAO</h2>
        <p>El Patrón DAO (Data Access Object) proporciona una abstracción para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una fuente de datos.</p>
        <p>En esta aplicación, la clase <strong>UserDAO</strong> actúa como el objeto de acceso a datos para la gestión de usuarios. Proporciona métodos para agregar usuarios, obtener información de usuarios, actualizar y eliminar usuarios.</p>
        <p>A continuación, puede agregar un usuario y ver la lista de usuarios gestionados por el DAO UserDAO.</p>
    `;

    // Escuchamos el evento de envío del formulario.
    userForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userName = userNameInput.value;
        const userId = userIdInput.value;

        if (userName) {
            if (userId) {
                // Actualizamos el usuario existente usando el DAO.
                userDAO.updateUser(parseInt(userId), { name: userName });
            } else {
                // Creamos un nuevo usuario y lo agregamos usando el DAO.
                const newUser = { id: Date.now(), name: userName };
                userDAO.addUser(newUser);
            }
            updateUserList();
            userNameInput.value = '';
            userIdInput.value = '';
        }
    });

    // Función para actualizar la lista de usuarios en el DOM.
    function updateUserList() {
        // Limpiamos la lista de usuarios en el DOM.
        userList.innerHTML = '<h2>Lista de Usuarios</h2>';

        // Obtenemos todos los usuarios usando el DAO.
        const users = userDAO.getAllUsers();

        // Iteramos sobre los usuarios y los agregamos al DOM.
        users.forEach(user => {
            const userItem = document.createElement('div');
            userItem.classList.add('user-item');
            userItem.textContent = `ID: ${user.id}, Nombre: ${user.name}`;

            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.addEventListener('click', function () {
                userIdInput.value = user.id;
                userNameInput.value = user.name;
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', function () {
                userDAO.deleteUser(user.id);
                updateUserList();
            });

            userItem.appendChild(editButton);
            userItem.appendChild(deleteButton);

            userList.appendChild(userItem);
        });
    }

    // Inicializamos la lista de usuarios en el DOM.
    updateUserList();
});
