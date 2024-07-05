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
        this.h2.classList.add("hidden");
        customElements.define("form-submit", FormSubmit);
        customElements.define("keyboard-events", KeyboardEvents);
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
      this.result = document.createElement("p");
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
        // Mostramos el resultado con los datos del formulario
        this.result.textContent = `Formulario enviado. Nombre: ${document.getElementById('nombre').value}, Email: ${document.getElementById('email').value}`;
        this.result.classList.remove("hidden");
        // Ocultamos el formulario y el mensaje de presione enviar
        this.h2.classList.add("hidden");
        this.form.classList.add("hidden");
        this.form.classList.remove("form_container");
        this.p.classList.add("hidden");
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
      this.p.textContent = "(Evento KeyDown) Nombre: ";
      this.appendChild(this.h2);
      this.appendChild(this.p);
      this.appendChild(this.nombre);
  
      let nombreInput = document.createElement("input");
      nombreInput.setAttribute("type", "text");
      nombreInput.setAttribute("id", "nombre");
      nombreInput.classList.add("input");
      this.nombre.appendChild(nombreInput);
  
      nombreInput.addEventListener("keydown", KeyDown);
  
      let form = document.getElementById("form");
      form.addEventListener("submit", () => {
        this.h2.classList.add("hidden");
        this.p.classList.add("hidden");
        this.nombre.classList.add("hidden");
        console.log("Eventos de Teclado finalizado");
      });
  
      function KeyDown(event) {
        let nombre = document.getElementById("nombre");
        nombre.value += event.key;
        let message = `Has presionado la tecla: ${event.key}`;
        alert(message); // Mostrar un mensaje de alerta
        console.log(message); // Mostrar en la consola para fines de depuración
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
      this.p = document.createElement("p");
      this.p.textContent = "Mueva el puntero fuera de la ventana para ver el mensaje.";
  
      // Estilos para el párrafo (opcional)
      this.p.style.padding = "10px";
      this.p.style.backgroundColor = "#f0f0f0";
      this.p.style.border = "1px solid #ccc";
      this.p.style.borderRadius = "5px";
    }
  
    connectedCallback() {
      console.log("Funcionando Eventos de Windows");
      this.appendChild(this.h2);
      this.appendChild(this.p);
  
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
      window.addEventListener("focus", () => {
        this.notify("La ventana ha obtenido el foco.");
      });
  
      // Evento de desenfoque (blur)
      window.addEventListener("blur", () => {
        this.notify("La ventana ha perdido el foco.");
      });
    }
  
    // Función para mostrar notificaciones
    notify(message) {
      alert(message); // Mostrar un mensaje de alerta
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
  
    document.getElementById("keyboardEventLink").addEventListener("click", (e) => {
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
  