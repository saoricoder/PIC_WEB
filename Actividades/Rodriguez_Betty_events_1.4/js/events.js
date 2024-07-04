//usando el DOM

class mouse_click extends HTMLElement {
  constructor() {
    super();
    this.h2 = document.createElement("h2");
    this.h2.textContent = "Eventos Click";
    this.h2.classList.add("subtitle");
    this.appendChild(this.h2);
    this.boton = document.createElement("input");
  }

  connectedCallback() {
    this.boton.type = "button";
    this.boton.classList.add("boton");
    this.boton.value = "Click me";
    this.appendChild(this.boton);
    this.boton.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Clicked");
      this.boton.classList.add("hidden");
      this.h2.classList.add("hidden");
      customElements.define("form-submit", form);
      customElements.define("keyboard-events", keyboard_event);
    });
  }
}
customElements.define("mouse-click", mouse_click);

class form extends HTMLElement {
  constructor() {
    super();
    this.h2 = document.createElement("h2");
    this.h2.textContent = "Eventos Form";
    this.h2.classList.add("subtitle");
    this.appendChild(this.h2);
    this.form = document.createElement("form");
  }
  connectedCallback() {
    this.form.setAttribute("id", "form");
    this.form.classList.add("form_container");
    this.form.innerHTML = `
        <div class="item_container">
          <label for="nombre">Nombre y Apellido</label
          ><input class="input" type="text" name="nombre" id="nombre" />
        </div>
        <div class="item_container">
          <label for="email">Email</label
          ><input class="input" type="email" name="email" id="email" />
        </div>
        <input class="submit" type="submit" value="Enviar" />
    `;
    this.appendChild(this.form);
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("submited");
      customElements.define("windows-event", windows_event);
      this.h2.classList.add("hidden");
      this.form.classList.add("hidden");
      this.form.classList.remove("form_container");
    });
  }
}
class keyboard_event extends HTMLElement {
  constructor() {
    super();
    this.h2 = document.createElement("h2");
    this.h2.textContent = "Eventos de Teclado";
    this.h2.classList.add("subtitle");
    this.appendChild(this.h2);
  }
  connectedCallback() {
    console.log("funcionando Key event");
    document.getElementById("form").addEventListener("submit", () => {
      this.h2.classList.add("hidden");
      console.log("Key event adios");
    });
  }
}
class windows_event extends HTMLElement {
  constructor() {
    super();
    this.h2 = document.createElement("h2");
    this.h2.textContent = "Eventos de Windows";
    this.h2.classList.add("subtitle");
    this.appendChild(this.h2);
  }
  connectedCallback() {
    console.log("funcionando Windows Events");
  }
}
