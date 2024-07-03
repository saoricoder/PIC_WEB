// Interfaz State
class State {
    doAction(context) {
        throw "This method must be overridden!";
    }
}

// Implementación concreta de State - StartState
class StartState extends State {
    doAction(context) {
        console.log("Player is in start state");
        context.setState(this);
    }

    toString() {
        return "Start State";
    }
}

// Implementación concreta de State - StopState
class StopState extends State {
    doAction(context) {
        console.log("Player is in stop state");
        context.setState(this);
    }

    toString() {
        return "Stop State";
    }
}

// Clase Context
class Context {
    constructor() {
        this.state = null;
    }

    setState(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}
