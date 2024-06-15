document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("form_academico")
    .addEventListener("submit", verificarDatos);
});
import { userService } from "../poput.js";
const body_container = document.getElementById("container");
window.onload = function () {
  const btn_auto_click = document.getElementById("poput_mensaje");
  btn_auto_click.addEventListener("click", poputExec);
};
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
function poputExec(event) {
  event.preventDefault();
  let body_container = document.getElementById("container");
  let mensaje = document.getElementById("mensaje").innerHTML;
  userService.insertPoput(body_container, mensaje);
  btnPoput_click();
  console.log("hola");
}
function verificarDatos(evento) {
  evento.preventDefault();
  var id_carreras = document.getElementById("id_carreras").value;
  if (id_carreras.length == 0) {
    userService.insertPoput(
      body_container,
      "El campo del Id se genera automaticamente recargue la pagina"
    );
    btnPoput_click();
    return;
  }

  this.submit();
}
