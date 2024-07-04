class Biblioteca {
    constructor(id, nombre, direccion) {
        this.idBiblioteca = id;
        this.nombreBiblioteca = nombre;
        this.direccion = direccion;
        this.libros = [];
        this.usuarios = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }

    registrarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    prestarLibro(libro, usuario) {
        // Lógica para prestar un libro
    }

    devolverLibro(libro, usuario) {
        // Lógica para devolver un libro
    }
}
