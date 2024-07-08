// Definición del Web Component para listar estudiantes
class StudentList extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      fetch('https://api.example.com/students')
        .then(response => response.json())
        .then(students => {
          this.innerHTML = `
            <h2>Listado de Estudiantes</h2>
            <ul>
              ${students.map(student => `<li>${student.name}</li>`).join('')}
            </ul>
          `;
        })
        .catch(error => {
          console.error('Error fetching students:', error);
          this.innerHTML = '<p>Error al cargar los estudiantes.</p>';
        });
    }
  }
  
  customElements.define('student-list', StudentList);
  