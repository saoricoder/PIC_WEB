const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.getElementById('drawRedCircle').addEventListener('click', () => {
    clearCanvas();
    const redCircle = new Circle(250, 250, 50, new RedCircle());
    redCircle.draw(ctx);
});

document.getElementById('drawGreenCircle').addEventListener('click', () => {
    clearCanvas();
    const greenCircle = new Circle(250, 250, 50, new GreenCircle());
    greenCircle.draw(ctx);
});
