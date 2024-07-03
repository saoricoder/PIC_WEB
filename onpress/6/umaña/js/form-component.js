// Definición del componente de formulario
class FormComponent extends HTMLElement {
    constructor() {
      super();
  
      // Lista de colores disponibles
      this.colors = ['#ffcccb', '#b19cd9', '#7fd1b9', '#ffb347', '#77dd77'];
  
      // Contador para seguir el índice de colores
      this.colorIndex = 0;
  
      // Template del componente
      const template = document.createElement('template');
      template.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Eventos de Formulario</h5>
            <form id="myForm">
              <div class="form-group">
                <label for="exampleFormControlInput1">Correo electrónico</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Ejemplo de select</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Ejemplo de textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-purple" id="submitBtn">Enviar</button>
            </form>
            <div id="formEventInfo" class="mt-3"></div>
          </div>
        </div>
      `;
  
      // Agregar el contenido del template al shadow DOM
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
  
      // Obtener referencia al botón de enviar
      this.submitButton = this.shadowRoot.querySelector('#submitBtn');
  
      // Manejar el evento de formulario
      this.shadowRoot.querySelector('#myForm').addEventListener('submit', this.handleSubmit.bind(this));
      
      // Cambiar el color del botón al hacer clic
      this.submitButton.addEventListener('click', this.changeColor.bind(this));
    }
  
    // Método para manejar el envío del formulario
    handleSubmit(event) {
      event.preventDefault(); // Evitar el envío estándar del formulario
  
      // Obtener valores del formulario
      const email = this.shadowRoot.querySelector('#exampleFormControlInput1').value;
      const selectValue = this.shadowRoot.querySelector('#exampleFormControlSelect1').value;
      const textareaValue = this.shadowRoot.querySelector('#exampleFormControlTextarea1').value;
  
      // Crear elemento para mostrar los datos guardados
      const infoContainer = document.createElement('div');
      infoContainer.classList.add('alert', 'alert-success', 'mt-3');
      infoContainer.textContent = `Email: ${email}, Select: ${selectValue}, Textarea: ${textareaValue}`;
  
      // Mostrar datos en el contenedor
      const formEventInfo = this.shadowRoot.querySelector('#formEventInfo');
      formEventInfo.appendChild(infoContainer);
  
      // Limpiar el formulario después de guardar (opcional)
      this.shadowRoot.querySelector('#myForm').reset();
  
      // Mostrar mensaje de éxito después de 1 segundo (simulación de guardado)
      setTimeout(() => {
        const successMessage = document.createElement('div');
        successMessage.classList.add('alert', 'alert-info', 'mt-3');
        successMessage.textContent = 'Datos guardados correctamente.';
        formEventInfo.appendChild(successMessage);
      }, 1000); // Simula un tiempo de respuesta del servidor de 1 segundo
    }
  
    // Método para cambiar el color del botón dinámicamente
    changeColor() {
      const color = this.colors[this.colorIndex];
      this.submitButton.style.backgroundColor = color;
      this.colorIndex = (this.colorIndex + 1) % this.colors.length;
    }
  }
  
  // Definir el componente personalizado
  customElements.define('form-component', FormComponent);
  