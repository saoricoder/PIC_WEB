// La clase UserAPI actúa como la fachada, proporcionando una interfaz simplificada
// para la gestión de usuarios. La clase maneja las operaciones de alto nivel.
class UserAPI {
    constructor() {
        // Inicializa la lista de usuarios.
        this.users = [];
    }

    // Método para obtener información de un usuario por su ID.
    getUserInfo(userId) {
        return this.users.find(user => user.id === userId);
    }

    // Método para agregar un nuevo usuario a la lista.
    addUser(user) {
        this.users.push(user);
        return user;
    }

    // Método para obtener todos los usuarios.
    getAllUsers() {
        return this.users;
    }
}
