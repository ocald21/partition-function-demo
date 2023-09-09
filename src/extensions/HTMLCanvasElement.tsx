import { MouseEvent } from "react"
import SimulationContainer from "../SimulationFunctions";
import AppConstants from "../AppConstants";

interface AbstractExtendedCanvas extends HTMLCanvasElement {
    getMouseX(event: MouseEvent<HTMLCanvasElement, any>): number
    getMouseY(event: MouseEvent<HTMLCanvasElement, any>): number
}

class ExtendedCanvas {
    private canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

    getMouseX(
        event: MouseEvent<HTMLCanvasElement, any>
    ): number {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = event.clientX;
    
        return mouseX.map(rect.left, rect.right, 0, AppConstants.HIGHEST_TEMPERATURE);
    }

    getMouseY(
        event: MouseEvent<HTMLCanvasElement, any>
    ): number {
        const rect = this.canvas.getBoundingClientRect();
    
        return event.clientY - rect.y;
    }
}

export default ExtendedCanvas;