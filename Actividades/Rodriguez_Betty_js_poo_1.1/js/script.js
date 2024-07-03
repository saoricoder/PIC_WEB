class Persona {
    constructor(nombre, contacto) {
        this.nombre = nombre;
        this.contacto = contacto;
    }
}

class Alumno extends Persona {
    constructor(nombre, edad, curso, contactoEmergencia) {
        super(nombre, contactoEmergencia);
        this.edad = edad;
        this.curso = curso;
    }

    agregarAlumno() {
        // Lógica para agregar alumno
    }

    editarAlumno() {
        // Lógica para editar alumno
    }
}

class IncidenteSeguridad {
    constructor(fecha, detalles, tipoIncidente) {
        this.fecha = fecha;
        this.detalles = detalles;
        this.tipoIncidente = tipoIncidente;
    }

    registrarIncidente() {
        // Lógica para registrar incidente
    }

    modificarIncidente() {
        // Lógica para modificar incidente
    }
}

class Aviso {
    constructor(mensaje, fecha, destinatario) {
        this.mensaje = mensaje;
        this.fecha = fecha;
        this.destinatario = destinatario;
    }

    enviarAviso() {
        // Lógica para enviar aviso
    }
}

class Tutor extends Persona {
    constructor(nombre, contacto, relacionAlumno) {
        super(nombre, contacto);
        this.relacionAlumno = relacionAlumno;
    }

    agregarTutor() {
        // Lógica para agregar tutor
    }

    editarTutor() {
        // Lógica para editar tutor
    }
}

document.getElementById('alumno-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let curso = document.getElementById('curso').value;
    let contactoEmergencia = document.getElementById('contactoEmergencia').value;

    let nuevoAlumno = new Alumno(nombre, edad, curso, contactoEmergencia);
    nuevoAlumno.agregarAlumno();
});

document.getElementById('incidente-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let fecha = document.getElementById('fecha').value;
    let detalles = document.getElementById('detalles').value;
    let tipoIncidente = document.getElementById('tipoIncidente').value;

    let nuevoIncidente = new IncidenteSeguridad(fecha, detalles, tipoIncidente);
    nuevoIncidente.registrarIncidente();
});

document.getElementById('aviso-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let mensaje = document.getElementById('mensaje').value;
    let fechaEnvio = document.getElementById('fechaEnvio').value;
    let destinatario = document.getElementById('destinatario').value;

    let nuevoAviso = new Aviso(mensaje, fechaEnvio, destinatario);
    nuevoAviso.enviarAviso();
});


class Notificacion {
    constructor(mensaje, fechaEnvio, receptor) {
        this.mensaje = mensaje;
        this.fechaEnvio = fechaEnvio;
        this.receptor = receptor;
    }
}

document.getElementById('form-estudiante').addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre-estudiante').value;
    let edad = document.getElementById('edad-estudiante').value;
    let grado = document.getElementById('grado-estudiante').value;

    let estudiante = new Estudiante(nombre, '', edad, grado);
    // Aquí se agregarían más acciones como guardar el estudiante en una colección

    document.getElementById('lista-estudiantes').innerHTML += `<p>${estudiante.nombre} - ${estudiante.edad} años - Grado: ${estudiante.grado}</p>`;
});
