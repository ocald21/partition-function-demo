interface CanvasRenderingContext2D {
    clearCanvas(): void
    drawPoints(points: Map<number, number>, color: string, width: number): void
    drawLine(x1: number, y1: number, x2: number, y2: number, color: string, weight: number): void
    drawSquare(x: number, y: number, width: number, fill: string): void
}

CanvasRenderingContext2D.prototype.clearCanvas = function() {
    this.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

CanvasRenderingContext2D.prototype.drawPoints = function(
    points: Map<number, number>,
    color: string,
    width: number
) {
    this.strokeStyle = color;
    this.lineWidth = width;
    this.beginPath();

    points.forEach((y: number, x: number) => {
        this.lineTo(x, this.canvas.height - y);
    });

    this.stroke();
    this.closePath();
}

CanvasRenderingContext2D.prototype.drawLine = function(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    color: string,
    width: number
) {
    this.strokeStyle = color;
    this.lineWidth = width;
    this.beginPath();
    this.moveTo(x1, this.canvas.height - y1);
    this.lineTo(x2, this.canvas.height - y2);
    this.stroke();
    this.closePath();
}

CanvasRenderingContext2D.prototype.drawSquare = function(
    x: number,
    y: number,
    width: number,
    fill: string
) {
    this.fillStyle = fill;
    this.fillRect(
        x - (width / 2), this.canvas.height - y - (width / 2), width, width
    );
}
