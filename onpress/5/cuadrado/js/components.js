class NavigationMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <a href="#">Inicio</a> |
                <a href="#">Noticias</a> |
                <a href="#">Equipos</a> |
                <a href="#">Calendario</a> |
                <a href="#">Contacto</a>
            </nav>
        `;
    }
}

class SectionOne extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section>
                <h2>Últimas Noticias</h2>
                <p id="news-content">Todo sobre el mundo del fútbol: partidos, fichajes, lesiones y más.</p>
                <button id="show-news">Ver más</button>
            </section>
        `;

        this.querySelector('#show-news').addEventListener('click', () => {
            const newsContent = this.querySelector('#news-content');
            newsContent.textContent += ' Aquí puedes encontrar detalles extensos sobre cada partido, análisis de expertos, entrevistas y mucho más.';
        });
    }
}

class SectionTwo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section>
                <h2>Equipos Destacados</h2>
                <p id="teams-content">Información sobre los equipos más importantes y sus jugadores estrella.</p>
                <button id="show-teams">Ver más</button>
            </section>
        `;

        this.querySelector('#show-teams').addEventListener('click', () => {
            const teamsContent = this.querySelector('#teams-content');
            teamsContent.textContent += ' Conoce las estadísticas, la historia y los logros de los equipos más reconocidos a nivel mundial.';
        });
    }
}

class UserInteraction extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="user-interaction">
                <h2>Interacción del Usuario</h2>
                <form id="interactionForm">
                    <label for="favoriteTeam">Equipo Favorito:</label>
                    <input type="text" id="favoriteTeam" name="favoriteTeam" required>
                    <button type="submit">Enviar</button>
                </form>
                <p id="responseMessage"></p>
            </section>
        `;

        const form = this.querySelector('#interactionForm');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const favoriteTeam = this.querySelector('#favoriteTeam').value;
            const responseMessage = this.querySelector('#responseMessage');
            responseMessage.textContent = `Tu equipo favorito es: ${favoriteTeam}`;
        });
    }
}

customElements.define('navigation-menu', NavigationMenu);
customElements.define('section-one', SectionOne);
customElements.define('section-two', SectionTwo);
customElements.define('user-interaction', UserInteraction);
