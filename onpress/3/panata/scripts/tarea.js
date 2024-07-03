class Tarea {
    constructor(id, descripcion, prioridad) {
        this.id = id;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.completada = false;
    }

    completar() {
        this.completada = true;
    }

    detalles() {
        return `Tarea ${this.id}: ${this.descripcion} (Prioridad: ${this.prioridad}) - Completada: ${this.completada}`;
    }
}

export default Tarea;
