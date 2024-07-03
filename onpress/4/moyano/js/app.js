class Aplicacion {
    constructor(baseDeDatos) {
        this.baseDeDatos = baseDeDatos;
    }

    agregarRegistro(codigo, descripcion, imagen) {
        let registro = new Registro(codigo, descripcion, imagen);
        this.baseDeDatos.agregarRegistro(registro);
    }

    listarRegistros() {
        return this.baseDeDatos.obtenerTodosLosRegistros();
    }

    modificarRegistro(codigo, descripcion, imagen) {
        this.baseDeDatos.modificarRegistro(codigo, descripcion, imagen);
    }

    eliminarRegistro(codigo) {
        this.baseDeDatos.eliminarRegistro(codigo);
    }
}
