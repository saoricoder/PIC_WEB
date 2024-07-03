// Interfaz DrawAPI
class DrawAPI {
    drawCircle(ctx, radius, x, y) {
        throw "¡Este método debe anularse!";
    }
}

// Implementación concreta de DrawAPI - RedCircle
class RedCircle extends DrawAPI {
    drawCircle(ctx, radius, x, y) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
    }
}

// Implementación concreta de DrawAPI - GreenCircle
class GreenCircle extends DrawAPI {
    drawCircle(ctx, radius, x, y) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
    }
}

// Clase abstracta Shape
class Shape {
    constructor(drawAPI) {
        this.drawAPI = drawAPI;
    }

    draw(ctx) {
        throw "¡Este método debe ser anulado!";
    }
}

// Implementación concreta de Shape - Circle
class Circle extends Shape {
    constructor(x, y, radius, drawAPI) {
        super(drawAPI);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw(ctx) {
        this.drawAPI.drawCircle(ctx, this.radius, this.x, this.y);
    }
}
