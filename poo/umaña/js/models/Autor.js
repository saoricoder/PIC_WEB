class Autor {
    constructor(id, nombre) {
        this.idAutor = id;
        this.nombre = nombre;
        this.libros = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }
}
