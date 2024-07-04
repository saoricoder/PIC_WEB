class Prestamo {
    constructor(id, usuario, libro, fechaPrestamo, fechaDevolucion) {
        this.idPrestamo = id;
        this.usuario = usuario;
        this.libro = libro;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
    }

    devolver() {
        // Lógica para devolver el libro prestado
    }
}
