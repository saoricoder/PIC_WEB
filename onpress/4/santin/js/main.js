import './components/inicio-componente.js';
import './components/catalogo-componente.js';
import './components/carrito-componente.js';
import './components/perfil-componente.js';
import './components/mi-componente.js';
import { router } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  router.init();
});
