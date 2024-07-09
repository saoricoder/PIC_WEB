// Definición del componente mouse-click
class MouseClick extends HTMLElement {
  constructor() {
    super();
    this.h2 = document.createElement("h2");
    this.h2.textContent = "Eventos Click";
    this.h2.classList.add("subtitle");
    this.boton = document.createElement("input");
    this.boton.type = "button";
    this.boton.classList.add("boton");
    this.boton.value = "Click me";
  }

  connectedCallback() {
    this.appendChild(this.h2);
    this.appendChild(this.boton);
    this.boton.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Clicked");
      this.boton.classList.add("hidden");
      this.h2.textContent = "Clicked";
    });
  }
}
customElements.define("mouse-click", MouseClick);

// Definición del componente form-submit
class FormSubmit extends HTMLElement {
  constructor() {
    super();
    this.h2 = document.createElement("h2");
    this.h2.textContent = "Eventos Form";
    this.h2.classList.add("subtitle");
    this.form = document.createElement("form");
    this.p = document.createElement("p");
    this.result = document.createElement("div");
  }

  connectedCallback() {
    this.form.setAttribute("id", "form");
    this.form.classList.add("form_container");
    this.form.innerHTML = `
          <div class="item_container">
            <label for="nombre">Nombre y Apellido</label>
            <input class="input" type="text" name="nombre" id="nombre" />
          </div>
          <div class="item_container">
            <label for="email">Email</label>
            <input class="input" type="email" name="email" id="email" />
          </div>
          <input class="submit" type="submit" value="Enviar" />
      `;
    this.appendChild(this.h2);
    this.appendChild(this.form);
    this.appendChild(this.p);
    this.p.textContent = "Presione Enviar";
    this.result.classList.add("hidden"); // Ocultamos el resultado inicialmente
    this.appendChild(this.result);

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      let nombre = document.getElementById("nombre").value;
      let email = document.getElementById("email").value;
      if (nombre.length === 0 || email.length === 0) {
        alert("Debe rellenar el formulario");
        return;
      } else {
        // Mostramos el resultado con los datos del formulario
        this.result.innerHTML = `
        <h1 class="titulo">Formulario enviado.</h1>
        <h2 class="subtitle">Nombre: ${nombre}</h2>
        <h2 class="subtitle">Email: ${email}</h2>
        `;
        this.result.classList.remove("hidden");
        // Ocultamos el formulario y el mensaje de presione enviar
        this.h2.classList.add("hidden");
        this.form.classList.add("hidden");
        this.form.classList.remove("form_container");
        this.p.classList.add("hidden");
      }
    });
  }
}
customElements.define("form-submit", FormSubmit);

// Definición del componente keyboard-events
class KeyboardEvents extends HTMLElement {
  constructor() {
    super();
    this.h2 = document.createElement("h2");
    this.h2.textContent = "Eventos de Teclado";
    this.h2.classList.add("subtitle");
    this.p = document.createElement("p");
    this.nombre = document.createElement("p");
  }

  connectedCallback() {
    console.log("Funcionando Eventos de Teclado");
    this.p.textContent = "(Evento KeyDown)";
    this.nombre.setAttribute("id", "nombre");
    let nombreInput = document.createElement("input");
    nombreInput.setAttribute("type", "text");
    nombreInput.classList.add("input");
    nombreInput.classList.add("teclado");

    this.appendChild(this.h2);
    this.appendChild(this.p);
    this.appendChild(nombreInput);
    this.appendChild(this.nombre);

    nombreInput.addEventListener("keydown", KeyDown);

    function KeyDown(event) {
      let nombre = document.getElementById("nombre");
      nombre.textContent += event.key;
      console.log(nombre.textContent); // Mostrar en la consola para fines de depuración
    }
  }
}
customElements.define("keyboard-events", KeyboardEvents);

// Definición del componente windows-event
class WindowsEvent extends HTMLElement {
  constructor() {
    super();
    this.h2 = document.createElement("h2");
    this.h2.textContent = "Eventos de Windows";
    this.h2.classList.add("subtitle");
    this.p = document.createElement("input");
    this.p.setAttribute("type", "text");
    this.p.value = "Haga click dentro de esta ventana para ver el mensaje.";
    this.result = document.createElement("p");

    // Estilos para el párrafo (opcional)
    this.p.style.padding = "10px";
    this.p.style.backgroundColor = "#f0f0f0";
    this.p.style.border = "1px solid #ccc";
    this.p.style.borderRadius = "5px";
    this.p.style.width = "400px";
    this.p.style.margin = "1rem 0";
  }

  connectedCallback() {
    console.log("Funcionando Eventos de Windows");
    this.p.setAttribute("id", "foco");
    this.appendChild(this.h2);
    this.appendChild(this.p);
    this.appendChild(this.result);
    let foco = document.getElementById("foco");

    // Evento de carga (load)
    window.addEventListener("load", () => {
      this.notify("Se ha cargado la página.");
    });

    // Evento de redimensionamiento (resize)
    window.addEventListener("resize", () => {
      this.notify("Se ha redimensionado la ventana.");
    });

    // Evento de desplazamiento (scroll)
    window.addEventListener("scroll", () => {
      this.notify("Se ha realizado un desplazamiento.");
    });

    // Evento de enfoque (focus)
    foco.addEventListener("focus", () => {
      this.notify("Bien, Elemento con focus activado, ahora presione afuera");
    });

    // Evento de desenfoque (blur)
    foco.addEventListener("blur", () => {
      this.notify("Se ha perdido el foco");
    });
  }

  // Función para mostrar notificaciones
  notify(message) {
    this.result.innerHTML = "";
    this.result.textContent = message; // Mostrar un mensaje en el dom
    console.log(message); // Mostrar en la consola para fines de depuración
  }
}

customElements.define("windows-event", WindowsEvent);

// Código principal para manejar los eventos
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  document.getElementById("mouseEventLink").addEventListener("click", (e) => {
    e.preventDefault();
    content.innerHTML = "";
    const mouseClickElement = document.createElement("mouse-click");
    content.appendChild(mouseClickElement);
  });

  document.getElementById("formEventLink").addEventListener("click", (e) => {
    e.preventDefault();
    content.innerHTML = "";
    const formSubmitElement = document.createElement("form-submit");
    content.appendChild(formSubmitElement);
  });

  document
    .getElementById("keyboardEventLink")
    .addEventListener("click", (e) => {
      e.preventDefault();
      content.innerHTML = "";
      const keyboardEventsElement = document.createElement("keyboard-events");
      content.appendChild(keyboardEventsElement);
    });

  document.getElementById("windowsEventLink").addEventListener("click", (e) => {
    e.preventDefault();
    content.innerHTML = "";
    const windowsEventElement = document.createElement("windows-event");
    content.appendChild(windowsEventElement);
  });
});
