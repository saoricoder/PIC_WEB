class Libro {
    constructor(id, titulo, autor) {
        this.idLibro = id;
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    cambiarDisponibilidad(estado) {
        this.disponible = estado;
    }
}
