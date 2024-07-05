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
    this.p = document.createElement("p");
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
      alert("submited");
      customElements.define("windows-event", windows_event);
      this.h2.classList.add("hidden");
      this.form.classList.add("hidden");
      this.form.classList.remove("form_container");
      this.p.classList.add("hidden");
    });
    this.p.textContent = "Presione Enviar para el siguiente evento";
    this.appendChild(this.p);
  }
}
class keyboard_event extends HTMLElement {
  constructor() {
    super();
    this.h2 = document.createElement("h2");
    this.h2.textContent = "Eventos de Teclado";
    this.h2.classList.add("subtitle");
    this.appendChild(this.h2);
    this.p = document.createElement("p");
    this.p1 = document.createElement("p");
    this.p2 = document.createElement("p");
    this.nombre = document.createElement("p");
    this.email = document.createElement("p");
  }
  connectedCallback() {
    console.log("funcionando Key event");
    this.p.textContent = "(Evento KeyDown) Nombre: ";
    this.appendChild(this.p);
    this.nombre.setAttribute("id", "name");
    this.appendChild(this.nombre);
    this.p1.textContent = "(Evento KeyUp) Email:";
    this.appendChild(this.p1);
    this.email.setAttribute("id", "correo");
    this.appendChild(this.email);

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    nombre.addEventListener("keydown", KeyDown);
    email.addEventListener("keyup", keyUP);
    document.getElementById("form").addEventListener("submit", () => {
      this.h2.classList.add("hidden");
      this.p.classList.add("hidden");
      this.p1.classList.add("hidden");
      this.p2.classList.add("hidden");
      let nombre = document.getElementById("name");
      nombre.innerHTML = "";
      let email = document.getElementById("correo");
      email.innerHTML = "";
      console.log("Key event adios");
    });
    function KeyDown(event) {
      let nombre = document.getElementById("name");
      nombre.innerHTML += event.key;
    }
    function keyUP(event) {
      let email = document.getElementById("correo");
      email.innerHTML += event.key;
    }
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
