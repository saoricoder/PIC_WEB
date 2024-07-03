import './components/inicio-componente.js';
import './components/exploraciones-componente.js';
import './components/astronautas-componente.js';
import './components/misiones-componente.js';
import './components/nuevo-componente.js';
import { router } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  router.init();
});
