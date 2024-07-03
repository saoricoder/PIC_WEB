function navigate(page) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    switch(page) {
        case 'home':
            content.appendChild(document.createElement('home-component'));
            break;
        case 'about':
            content.appendChild(document.createElement('about-component'));
            break;
        case 'contact':
            content.appendChild(document.createElement('contact-component'));
            break;
    }
}

// Por defecto, cargar la página de inicio
navigate('home');
