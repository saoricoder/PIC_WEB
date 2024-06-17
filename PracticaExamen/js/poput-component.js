import { userService } from "./components/poput.js";
const body_container = document.getElementById("container");

//inputs
const id_carreras = document.getElementById("id_carreras");
const nombre_carrera = document.getElementById("nombre_carrera");
const director_carrera = document.getElementById("director_carrera");
const modulo = document.getElementById("modulo");
const id_user = document.getElementById("id_user");
const cedula = document.getElementById("cedula");
//button
const guardar = document.getElementById("agregar");
const modificar = document.getElementById("modificar");
const eliminar = document.getElementById("eliminar");
const listar = document.getElementById("listar");

//funciones
function btnPoput_click() {
  const btnPoput = document.getElementById("btnPoput");
  poput.classList.remove("hidden");
  document.body.classList.add("block__window");
  btnPoput.addEventListener("click", (event) => {
    event.preventDefault();
    poput.classList.add("hidden");
    userService.removePoput(body_container);
    document.body.classList.remove("block__window");
  });
}

function verificarDatos() {
  if (modulo.value === "carreras" || modulo.value === "prueba") {
    if (
      id_carreras.value.length == 0 ||
      nombre_carrera.value.length == 0 ||
      director_carrera.value.length == 0
    ) {
      userService.insertPoput(
        body_container,
        "Debe llenar los datos solicitados"
      );
      btnPoput_click();
      return;
    }
  } else {
    if (id_user.value.length == 0 || cedula.value.length == 0) {
      userService.insertPoput(
        body_container,
        "Debe llenar los datos solicitados"
      );
      btnPoput_click();
      return;
    }
  }
  this.submit();
}

function btn_redireccion() {
  const btnPoput = document.getElementById("btnPoput");
  poput.classList.remove("hidden");
  document.body.classList.add("block__window");
  btnPoput.addEventListener("click", (event) => {
    event.preventDefault();
    poput.classList.add("hidden");
    userService.removePoput(body_container);
    document.body.classList.remove("block__window");
    location.replace(location.href);
  });
}
function mostrarMensaje(text) {
  userService.insertPoput(body_container, text);
}

//Listar datos
listar.addEventListener("click", (event) => {
  event.preventDefault();
  let listado = listar.value;
  let data = {
    listado,
    modulo: modulo.value,
  };
  $.post("../modules/modulos.php", data, (response) => {
    mostrarMensaje(response);
    btn_redireccion();
    console.log(response);
    console.log("listar");
  });
});

//Guardar Datos
/* guardar.addEventListener("click", (event) => {
  event.preventDefault();
  let data = "";
  if (verificarDatos()) {
    if (modulo.value === "carreras" || modulo.value === "prueba") {
      data = {
        id_carreras: id_carreras.value,
        nombre_carrera: nombre_carrera.value,
        director_carrera: director_carrera.value,
        modulo: modulo.value,
        agregar: guardar.value,
      };
    } else {
      data = {
        id_carreras: id_carreras.value,
        id_estudiantes: id_user,
        id_docentes: id_user.value,
        cedula_estudiante: cedula.value,
        cedula_docente: cedula.value,
        modulo: modulo.value,
        agregar: guardar.value,
      };
    }
    $.post("../modules/modulos.php", data, (response) => {
      mostrarMensaje(response);
      btnPoput_click();
      console.log(response);
    });
    console.log("guardado");
  } else {
    console.log("Fallo");
  }
}); */
document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form_academico");
  form.action = "../modules/modulos.php";
  form.method = "POST";
  form.addEventListener("submit", verificarDatos);
});
