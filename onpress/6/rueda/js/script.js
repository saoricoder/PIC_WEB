document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    
    document.getElementById('mouseEventLink').addEventListener('click', (e) => {
        e.preventDefault();
        content.innerHTML = `
            <h2>Evento de Mouse</h2>
            <button id="mouseButton">Haz clic en mí</button>
            <p id="mouseResult"></p>
        `;
        document.getElementById('mouseButton').addEventListener('click', () => {
            document.getElementById('mouseResult').textContent = '¡Haz hecho clic en el botón!';
        });
    });

    document.getElementById('keyboardEventLink').addEventListener('click', (e) => {
        e.preventDefault();
        content.innerHTML = `
            <h2>Evento de Teclado</h2>
            <input type="text" id="keyboardInput" placeholder="Escribe algo">
            <p id="keyboardResult"></p>
        `;
        document.getElementById('keyboardInput').addEventListener('keyup', (event) => {
            document.getElementById('keyboardResult').textContent = `Has presionado la tecla: ${event.key}`;
        });
    });

    document.getElementById('formEventLink').addEventListener('click', (e) => {
        e.preventDefault();
        content.innerHTML = `
            <h2>Evento de Formulario</h2>
            <form id="sampleForm">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required>
                <button type="submit">Enviar</button>
            </form>
            <p id="formResult"></p>
        `;
        document.getElementById('sampleForm').addEventListener('submit', (event) => {
            event.preventDefault();
            document.getElementById('formResult').textContent = `Formulario enviado. Nombre: ${document.getElementById('name').value}`;
        });
    });

    document.getElementById('domEventLink').addEventListener('click', (e) => {
        e.preventDefault();
        content.innerHTML = `
            <h2>Evento de DOM</h2>
            <button id="createElementButton">Crear nuevo elemento</button>
            <div id="domContainer"></div>
        `;
        document.getElementById('createElementButton').addEventListener('click', () => {
            const newElement = document.createElement('p');
            newElement.textContent = 'Nuevo elemento añadido al DOM';
            document.getElementById('domContainer').appendChild(newElement);
        });
    });

    document.getElementById('styleEventLink').addEventListener('click', (e) => {
        e.preventDefault();
        content.innerHTML = `
            <h2>Evento de Cambio de Estilo</h2>
            <button id="changeStyleButton">Cambiar estilo</button>
            <p id="styleResult" class="colorful">Este es un texto con estilo dinámico</p>
        `;
        document.getElementById('changeStyleButton').addEventListener('click', () => {
            document.getElementById('styleResult').classList.toggle('colorful');
        });
    });

    document.getElementById('timerEventLink').addEventListener('click', (e) => {
        e.preventDefault();
        content.innerHTML = `
            <h2>Evento de Temporizador</h2>
            <button id="startTimerButton">Iniciar Temporizador</button>
            <p id="timerResult">0 segundos</p>
        `;
        let seconds = 0;
        let timer;
        document.getElementById('startTimerButton').addEventListener('click', () => {
            if (timer) clearInterval(timer);
            seconds = 0;
            timer = setInterval(() => {
                seconds++;
                document.getElementById('timerResult').textContent = `${seconds} segundos`;
            }, 1000);
        });
    });
});
