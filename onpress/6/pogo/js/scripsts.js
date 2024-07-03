function loadComponent(component) {
    fetch(`components/${component}`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            initializeComponent(component);
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

function initializeComponent(component) {
    switch(component) {
        case 'mouse.html':
            initializeMouseComponent();
            break;
        case 'form.html':
            initializeFormComponent();
            break;
        case 'keyboard.html':
            initializeKeyboardComponent();
            break;
        case 'dom.html':
            initializeDomComponent();
            break;
        default:
            break;
    }
}

function initializeMouseComponent() {
    const p = document.querySelector('p');
    if (p) {
        p.addEventListener('mouseover', function() {
            alert('Mouse over!');
        });
    }
}

function initializeFormComponent() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Formulario enviado');
        });
    }
}

function initializeKeyboardComponent() {
    document.addEventListener('keydown', function(event) {
        const keyCodeDiv = document.getElementById('keyCode');
        if (keyCodeDiv) {
            keyCodeDiv.textContent = 'Key Code: ' + event.keyCode;
        }
    });
}

function initializeDomComponent() {
    const button = document.getElementById('changeColor');
    if (button) {
        button.addEventListener('click', function() {
            document.body.style.backgroundColor = 'lightblue';
        });
    }
}
