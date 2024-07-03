import './components/inicio-componente.js';
import './components/exploraciones-componente.js';
import './components/astronautas-componente.js';
import './components/misiones-componente.js';
import './components/nuevo-componente.js'; // Importar el nuevo componente

export const router = {
  routes: {
    '/': 'inicio-componente',
    '/exploraciones': 'exploraciones-componente',
    '/astronautas': 'astronautas-componente',
    '/misiones': 'misiones-componente',
    '/nuevo': 'nuevo-componente' // Agregar la ruta para el nuevo componente
  },

  init() {
    // Manejar la navegación inicial
    this.navigate(window.location.pathname);

    // Manejar los cambios de historial
    window.onpopstate = () => {
      this.navigate(window.location.pathname);
    };

    // Agregar eventos de clic a los enlaces del menú
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const path = link.getAttribute('href');
        this.navigate(path);
      });
    });
  },

  navigate(path) {
    const component = this.routes[path];
    const outlet = document.getElementById('main-content');
    if (component) {
      // Crear una instancia del componente y agregarla al DOM
      import(`./components/${component}.js`).then(module => {
        const ComponentClass = customElements.get(component);
        const element = new ComponentClass();
        outlet.innerHTML = '';
        outlet.appendChild(element);
      }).catch(error => {
        console.error(`Error loading component for path '${path}':`, error);
      });
    } else {
      // Si la ruta no está definida, cargar el componente por defecto
      outlet.innerHTML = `<inicio-componente></inicio-componente>`;
    }
    history.pushState({}, '', path);
  }
};
