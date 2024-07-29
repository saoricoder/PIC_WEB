// Definición del Web Component para agregar estudiantes
class AddStudentForm extends HTMLElement {
    connectedCallback() {
      this.render();
      this.addEventListener('submit', this.onSubmit.bind(this));
    }
  
    render() {
      this.innerHTML = `
        <h2>Agregar Estudiante</h2>
        <form id="addStudentForm">
          <label for="studentName">Nombre del Estudiante:</label>
          <input type="text" id="studentName" name="studentName" required>
          <button type="submit">Agregar</button>
        </form>
      `;
    }
  
    onSubmit(event) {
      event.preventDefault();
      const studentName = this.querySelector('#studentName').value;
  
      fetch('https://api.example.com/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: studentName }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al agregar estudiante.');
          }
          alert('Estudiante agregado correctamente.');
          this.querySelector('#studentName').value = '';
        })
        .catch(error => {
          console.error('Error adding student:', error);
          alert('Error al agregar estudiante. Inténtalo nuevamente.');
        });
    }
  }
  
  customElements.define('add-student-form', AddStudentForm);
  