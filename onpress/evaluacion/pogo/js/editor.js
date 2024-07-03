let currentContent = '';

function loadPageComponents() {
    const pageSelect = document.getElementById('page-select').value;
    loadComponentContent(pageSelect);
}

function loadComponentContent() {
    const pageSelect = document.getElementById('page-select').value;
    const componentSelect = document.getElementById('component-select').value;
    const contentDisplay = document.getElementById('content-display');

    // Obtener el contenido almacenado
    const storedContent = localStorage.getItem(`${pageSelect}-${componentSelect}`);

    // Si hay contenido almacenado, mostrarlo; de lo contrario, mostrar el contenido predeterminado
    if (storedContent) {
        currentContent = storedContent;
    } else {
        switch (componentSelect) {
            case 'header':
                currentContent = `<h4>Header</h4><p id="header-content">Encabezado Principal UFA ESPE</p>`;
                break;
            case 'nav':
                currentContent = `<h4>Nav</h4><ul><li><a href="../index.html">Inicio</a></li></ul>`;
                break;
            case 'section':
                currentContent = `
                    <h4>Section</h4>
                    <div id="section-text-container" class="content-box">
                        <p id="section-text">Texto de la sección</p>
                        <button onclick="modificarTexto()">Modificar Texto</button>
                    </div>
                    <!-- Otros elementos de la sección -->
                `;
                break;
            case 'footer':
                currentContent = `<h4>Footer</h4><p id="footer-content">Pie de página con información adicional. COPYRIGHT ESPE</p>`;
                break;
            default:
                currentContent = '';
                break;
        }
    }

    contentDisplay.innerHTML = currentContent;
}

function editContent() {
    const editableContent = document.getElementById('content-display').querySelector('textarea');
    editableContent.style.display = 'block';
    editableContent.value = currentContent;
}

function saveContent() {
    const editableContent = document.getElementById('content-display').querySelector('textarea');
    const contentDisplay = document.getElementById('content-display');
    contentDisplay.innerHTML = editableContent.value;
    currentContent = editableContent.value;

    // Guardar los cambios en el almacenamiento local
    const pageSelect = document.getElementById('page-select').value;
    const componentSelect = document.getElementById('component-select').value;
    localStorage.setItem(`${pageSelect}-${componentSelect}`, currentContent);
    editableContent.style.display = 'none';

    // Aplicar los cambios a la página seleccionada
    applyChangesToPage(pageSelect, componentSelect);
}

function applyChangesToPage(page, component) {
    // Obtener el iframe de la página seleccionada
    const iframe = document.getElementById('page-iframe');
    const iframeDoc = iframe.contentWindow.document;

    // Actualizar el contenido del componente en el iframe
    const contentDisplay = document.getElementById('content-display');
    contentDisplay.innerHTML = currentContent;
    iframeDoc.body.innerHTML = currentContent;

    // Guardar los cambios en futbol.html
    const pageContent = currentContent;
    const blob = new Blob([pageContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'futbol.html';
    a.click();

    URL.revokeObjectURL(url);
}

// Mostrar solo la parte correspondiente del contenido
function showComponentContent(component) {
    const contentDisplay = document.getElementById('content-display');

    switch (component) {
        case 'header':
            currentContent = `<h4>Header</h4><p id="header-content">Encabezado Principal UFA ESPE</p>`;
            break;
        case 'nav':
            currentContent = `<h4>Nav</h4><ul><li><a href="../index.html">Inicio</a></li></ul>`;
            break;
        case 'section':
            currentContent = `
                <h4>Section</h4>
                <div id="section-text-container" class="content-box">
                    <p id="section-text">Texto de la sección</p>
                    <button onclick="modificarTexto()">Modificar Texto</button>
                </div>
                <!-- Otros elementos de la sección -->
            `;
            break;
        case 'footer':
            currentContent = `<h4>Footer</h4><p id="footer-content">Pie de página con información adicional. COPYRIGHT ESPE</p>`;
            break;
        default:
            currentContent = '';
            break;
    }

    contentDisplay.innerHTML = currentContent;
}
