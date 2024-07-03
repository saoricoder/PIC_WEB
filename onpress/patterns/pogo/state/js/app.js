// Crear una instancia del contexto
const context = new Context();

document.getElementById('startState').addEventListener('click', () => {
    const startState = new StartState();
    startState.doAction(context);
    document.getElementById('output').innerText = `Current State: ${context.getState()}`;
});

document.getElementById('stopState').addEventListener('click', () => {
    const stopState = new StopState();
    stopState.doAction(context);
    document.getElementById('output').innerText = `Current State: ${context.getState()}`;
});
