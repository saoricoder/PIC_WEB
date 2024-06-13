/* Diseño de poput mediante javascript imitando React */
const createPoput = (poput_title) => {
  const poput_container = document.createElement("div");
  poput_container.classList.add("poput__confirmation", "hidden");
  poput_container.setAttribute("id", "poput");
  const poput_content = `<div class="poput__confirmation__container">
      <p id="poputTitle" class="poput__confirmation__text">${poput_title}</p>
      <a id="btnPoput" href="" class="poput__confirmation__boton hidden">Aceptar</a>
    </div>`;
  poput_container.innerHTML = poput_content;
  return poput_container;
};
const insertPoput = (nodeParent, text) => {
  const child_before = nodeParent.firstElementChild;
  nodeParent.insertBefore(createPoput(text), child_before.nextSibling);
};
const removePoput = (nodeParent) => {
  const child_before = nodeParent.firstElementChild.nextSibling;
  nodeParent.removeChild(child_before);
};
// Exportamos metodos CRUD
export const userService = {
  insertPoput,
  removePoput,
};
