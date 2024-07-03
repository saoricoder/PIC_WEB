// Clase base Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Clase Player que hereda de Person
class Player extends Person {
    constructor(name, age, position, number) {
        super(name, age);
        this.position = position;
        this.number = number;
    }

    displayInfo() {
        return `${super.displayInfo()}, Position: ${this.position}, Number: ${this.number}`;
    }
}

// Clase Coach que hereda de Person
class Coach extends Person {
    constructor(name, age, strategy) {
        super(name, age);
        this.strategy = strategy;
    }

    displayInfo() {
        return `${super.displayInfo()}, Strategy: ${this.strategy}`;
    }
}

// Clase Stadium
class Stadium {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
    }

    displayInfo() {
        return `Stadium: ${this.name}, Capacity: ${this.capacity}`;
    }
}

// Clase Team
class Team {
    constructor(name, coach, stadium) {
        this.name = name;
        this.players = [];
        this.coach = coach; // Agregación
        this.stadium = stadium; // Composición
    }

    addPlayer(player) {
        this.players.push(player);
    }

    displayTeam() {
        const teamInfo = [];
        teamInfo.push(`<div class="team-info"><strong>Team:</strong> ${this.name}</div>`);
        teamInfo.push(`<div class="team-info"><strong>Coach:</strong> ${this.coach.displayInfo()}</div>`);
        teamInfo.push(`<div class="team-info"><strong>Stadium:</strong> ${this.stadium.displayInfo()}</div>`);
        teamInfo.push('<div class="players-info"><strong>Players:</strong>');
        this.players.forEach(player => {
            teamInfo.push(`
                <div class="player">
                    <h3>${player.name}</h3>
                    <p><strong>Age:</strong> ${player.age}</p>
                    <p><strong>Position:</strong> ${player.position}</p>
                    <p><strong>Number:</strong> ${player.number}</p>
                </div>
            `);
        });
        teamInfo.push('</div>');
        return teamInfo.join('');
    }
}

// Crear objetos y relaciones
const coach = new Coach('Pep Guardiola', 50, 'Offensive');
const stadium = new Stadium('Camp Nou', 99354);
const team = new Team('FC Barcelona', coach, stadium);

const player1 = new Player('Lionel Messi', 34, 'Forward', 10);
const player2 = new Player('Sergio Busquets', 32, 'Midfielder', 5);

team.addPlayer(player1);
team.addPlayer(player2);

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('player-details')) {
        document.getElementById('player-details').innerHTML = team.displayTeam();
    }
});
