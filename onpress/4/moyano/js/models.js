class Registro {
    constructor(codigo, descripcion, imagen) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.imagen = imagen; // URL de la imagen
    }
}

class BaseDeDatos {
    constructor() {
        this.registros = [];
    }

    agregarRegistro(registro) {
        this.registros.push(registro);
    }

    obtenerRegistroPorCodigo(codigo) {
        return this.registros.find(registro => registro.codigo === codigo);
    }

    obtenerRegistroPorDescripcion(descripcion) {
        return this.registros.filter(registro => registro.descripcion.includes(descripcion));
    }

    obtenerTodosLosRegistros() {
        return this.registros;
    }

    modificarRegistro(codigo, nuevaDescripcion, nuevaImagen) {
        let registro = this.obtenerRegistroPorCodigo(codigo);
        if (registro) {
            registro.descripcion = nuevaDescripcion;
            if (nuevaImagen) {
                registro.imagen = nuevaImagen;
            }
        }
    }

    eliminarRegistro(codigo) {
        this.registros = this.registros.filter(registro => registro.codigo !== codigo);
    }
}
