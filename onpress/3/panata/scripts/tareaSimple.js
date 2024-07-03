import Tarea from './tarea.js';

class TareaSimple extends Tarea {
    constructor(id, descripcion, prioridad, fechaLimite) {
        super(id, descripcion, prioridad);
        this.fechaLimite = fechaLimite;
    }

    detalles() {
        return `Tarea Simple ${this.id}: ${this.descripcion} (Prioridad: ${this.prioridad}) - Completada: ${this.completada}, Fecha Límite: ${this.fechaLimite}`;
    }
}

export default TareaSimple;
