// Clase padre
let alumnos = [];
let incidentes = [];
let avisos = [];

let idActual = null;

// Event Listeners
document.getElementById("agregar").addEventListener("click", agregarAlumno);
document
  .getElementById("actualizar-button")
  .addEventListener("click", actualizarAlumno);
document
  .getElementById("incidente-form")
  .addEventListener("submit", agregarIncidente);
document.getElementById("aviso-form").addEventListener("submit", agregarAviso);

// Función para agregar alumno
function agregarAlumno(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const curso = document.getElementById("curso").value;
  const contactoEmergencia =
    document.getElementById("contactoEmergencia").value;
  const id = new Date().getTime();

  const alumno = new Alumno(id, nombre, edad, curso, contactoEmergencia);
  alumnos.push(alumno);
  renderizarAlumnos();
  document.getElementById("alumno-form").reset();
}

// Función para renderizar alumnos
function renderizarAlumnos() {
  const alumnosList = document.getElementById("alumnos-list");
  alumnosList.innerHTML = "";

  alumnos.forEach((alumno) => {
    const tr = document.createElement("tr");
    tr.id = `alumno-${alumno.id}`;
    tr.classList.add("result_container");

    let detalles = alumno.obtenerDetalles().split(", ");
    detalles.forEach((detalle) => {
      const td = document.createElement("td");
      td.textContent = detalle.split(": ")[1];
      tr.appendChild(td);
    });

    const tdAcciones = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-warning", "btn-sm");
    editButton.textContent = "Editar";
    editButton.style.marginRight = "20px";
    editButton.addEventListener("click", () => editarAlumno(alumno.id));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => eliminarAlumno(alumno.id));

    tdAcciones.appendChild(editButton);
    tdAcciones.appendChild(deleteButton);
    tr.appendChild(tdAcciones);

    alumnosList.appendChild(tr);
  });
}

// Función para editar alumno
function editarAlumno(id) {
  const alumno = alumnos.find((a) => a.id === id);
  idActual = id;

  document.getElementById("nombre").value = alumno.nombre;
  document.getElementById("edad").value = alumno.edad;
  document.getElementById("curso").value = alumno.curso;
  document.getElementById("contactoEmergencia").value =
    alumno.contactoEmergencia;

  document.getElementById("actualizar-button").style.display = "block";
  document.getElementById("agregar").style.display = "none";
}

// Función para actualizar alumno
function actualizarAlumno(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const curso = document.getElementById("curso").value;
  const contactoEmergencia =
    document.getElementById("contactoEmergencia").value;

  let indiceAlumno = alumnos.findIndex((a) => a.id === idActual);
  eliminarAlumno(idActual);
  const alumnoActualizado = new Alumno(
    idActual,
    nombre,
    edad,
    curso,
    contactoEmergencia
  );

  alumnos[indiceAlumno] = alumnoActualizado;
  document.getElementById("actualizar-button").style.display = "none";
  document.getElementById("agregar").style.display = "block";
  idActual = null;
  renderizarAlumnos();
  document.getElementById("alumno-form").reset();
}

// Función para eliminar alumno
function eliminarAlumno(id) {
  alumnos = alumnos.filter((a) => a.id !== id);
  renderizarAlumnos();
}

// Función para agregar incidente
function agregarIncidente(e) {
  e.preventDefault();
  const fecha = document.getElementById("fecha").value;
  const detalles = document.getElementById("detalles").value;
  const tipoIncidente = document.getElementById("tipoIncidente").value;
  const id = new Date().getTime();

  const incidente = new Incidente(id, fecha, detalles, tipoIncidente);
  incidentes.push(incidente);
  renderizarIncidentes();
  document.getElementById("incidente-form").reset();
}

// Función para renderizar incidentes
function renderizarIncidentes() {
  const incidentesList = document.getElementById("incidentes-list");
  incidentesList.innerHTML = "";

  incidentes.forEach((incidente) => {
    const tr = document.createElement("tr");
    tr.id = `incidente-${incidente.id}`;
    tr.classList.add("result_container");

    let detalles = incidente.obtenerDetalles().split(", ");
    detalles.forEach((detalle) => {
      const td = document.createElement("td");
      td.textContent = detalle.split(": ")[1];
      tr.appendChild(td);
    });

    const tdAcciones = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () =>
      eliminarIncidente(incidente.id)
    );

    tdAcciones.appendChild(deleteButton);
    tr.appendChild(tdAcciones);

    incidentesList.appendChild(tr);
  });
}

// Función para eliminar incidente
function eliminarIncidente(id) {
  incidentes = incidentes.filter((i) => i.id !== id);
  renderizarIncidentes();
}

// Función para agregar aviso
function agregarAviso(e) {
  e.preventDefault();
  const mensaje = document.getElementById("mensaje").value;
  const fechaEnvio = document.getElementById("fechaEnvio").value;
  const destinatario = document.getElementById("destinatario").value;
  const id = new Date().getTime();

  const aviso = new Aviso(id, mensaje, fechaEnvio, destinatario);
  avisos.push(aviso);
  renderizarAvisos();
  document.getElementById("aviso-form").reset();
}

// Función para renderizar avisos
function renderizarAvisos() {
  const avisosList = document.getElementById("avisos-list");
  avisosList.innerHTML = "";

  avisos.forEach((aviso) => {
    const tr = document.createElement("tr");
    tr.id = `aviso-${aviso.id}`;
    tr.classList.add("result_container");

    let detalles = aviso.obtenerDetalles().split(", ");
    detalles.forEach((detalle) => {
      const td = document.createElement("td");
      td.textContent = detalle.split(": ")[1];
      tr.appendChild(td);
    });

    const tdAcciones = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => eliminarAviso(aviso.id));

    tdAcciones.appendChild(deleteButton);
    tr.appendChild(tdAcciones);

    avisosList.appendChild(tr);
  });
}

// Función para eliminar aviso
function eliminarAviso(id) {
  avisos = avisos.filter((a) => a.id !== id);
  renderizarAvisos();
}

// Clases
class Alumno {
  constructor(id, nombre, edad, curso, contactoEmergencia) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
    this.contactoEmergencia = contactoEmergencia;
  }

  obtenerDetalles() {
    return `ID: ${this.id}, Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}, Contacto de Emergencia: ${this.contactoEmergencia}`;
  }
}

class Incidente {
  constructor(id, fecha, detalles, tipoIncidente) {
    this.id = id;
    this.fecha = fecha;
    this.detalles = detalles;
    this.tipoIncidente = tipoIncidente;
  }

  obtenerDetalles() {
    return `ID: ${this.id}, Fecha: ${this.fecha}, Detalles: ${this.detalles}, Tipo de Incidente: ${this.tipoIncidente}`;
  }
}

class Aviso {
  constructor(id, mensaje, fechaEnvio, destinatario) {
    this.id = id;
    this.mensaje = mensaje;
    this.fechaEnvio = fechaEnvio;
    this.destinatario = destinatario;
  }

  obtenerDetalles() {
    return `ID: ${this.id}, Mensaje: ${this.mensaje}, Fecha de Envío: ${this.fechaEnvio}, Destinatario: ${this.destinatario}`;
  }
}
