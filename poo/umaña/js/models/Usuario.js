class Usuario {
    constructor(id, nombre) {
        this.idUsuario = id;
        this.nombre = nombre;
        this.prestamos = [];
    }

    agregarPrestamo(prestamo) {
        this.prestamos.push(prestamo);
    }
}
