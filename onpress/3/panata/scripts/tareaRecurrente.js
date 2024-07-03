import Tarea from './tarea.js';

class TareaRecurrente extends Tarea {
    constructor(id, descripcion, prioridad, periodicidad) {
        super(id, descripcion, prioridad);
        this.periodicidad = periodicidad;
    }

    detalles() {
        return `Tarea Recurrente ${this.id}: ${this.descripcion} (Prioridad: ${this.prioridad}) - Completada: ${this.completada}, Periodicidad: ${this.periodicidad}`;
    }
}

export default TareaRecurrente;
