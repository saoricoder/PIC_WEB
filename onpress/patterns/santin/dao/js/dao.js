// La clase UserDAO actúa como el objeto de acceso a datos para los usuarios.
// Proporciona métodos para realizar operaciones CRUD en los usuarios.
class UserDAO {
    constructor() {
        this.users = [];
    }

    // Método para agregar un nuevo usuario.
    addUser(user) {
        this.users.push(user);
        return user;
    }

    // Método para obtener todos los usuarios.
    getAllUsers() {
        return this.users;
    }

    // Método para obtener información de un usuario por su ID.
    getUserById(userId) {
        return this.users.find(user => user.id === userId);
    }

    // Método para actualizar un usuario.
    updateUser(userId, updatedUser) {
        const index = this.users.findIndex(user => user.id === userId);
        if (index !== -1) {
            this.users[index] = { ...this.users[index], ...updatedUser };
            return this.users[index];
        }
        return null;
    }

    // Método para eliminar un usuario.
    deleteUser(userId) {
        const index = this.users.findIndex(user => user.id === userId);
        if (index !== -1) {
            const deletedUser = this.users.splice(index, 1);
            return deletedUser[0];
        }
        return null;
    }
}
