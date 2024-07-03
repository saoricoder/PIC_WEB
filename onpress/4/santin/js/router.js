export const router = {
    routes: {
      '/': 'inicio-componente',
      '/catalogo': 'catalogo-componente',
      '/carrito': 'carrito-componente',
      '/perfil': 'perfil-componente'
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
      outlet.innerHTML = `<${component}></${component}>`;
      history.pushState({}, '', path);
    }
  };
  