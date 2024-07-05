class Control {
    constructor(id, nombre, descripcion, tipo) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tipo = tipo;
    }
}

class SGSI {
    constructor() {
        this.controles = [];
    }

    agregarControl(control) {
        this.controles.push(control);
    }
}

const sgsi = new SGSI();

document.getElementById('controlForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = sgsi.controles.length + 1;
    const nombre = document.getElementById('nombreControl').value;
    const descripcion = document.getElementById('descripcionControl').value;
    const tipo = document.getElementById('tipoControl').value;

    const control = new Control(id, nombre, descripcion, tipo);
    sgsi.agregarControl(control);

    alert('Control registrado con éxito!');
    this.reset();
});
