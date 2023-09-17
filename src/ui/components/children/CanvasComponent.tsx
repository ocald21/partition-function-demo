import { FC, useEffect, useRef } from "react";
import styles from "../../../css/children/CanvasComponent.module.css";
import { MathComponent } from "mathjax-react";
import SimulationFunctions from "../../../SimulationFunctions";
import AppConstants from "../../../AppConstants";
import DynamicComponentProps from "../../props/DynamicComponentProps";
import TooltipComponent from "./TooltipComponent";
import ExtendedCanvas from "../../../extensions/HTMLCanvasElement";
import { CanvasRef } from "../../../types/types";

const CanvasComponent: FC<DynamicComponentProps> = ({ 
    temperature, 
    energyLevel, 
    energyLevelCount, 
    degeneracy,
    updateTemperature,
}) => {
    const canvasRef = useRef<CanvasRef>(null);
    var mousePressed = false;

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext('2d')!;
        const points = SimulationFunctions.getCoordinatePairs(energyLevel, energyLevelCount, degeneracy.get(energyLevel)!)
            .mapKeys((temperature) => temperature.map(0, AppConstants.HIGHEST_TEMPERATURE, 0, canvas.width))
            .mapValues((probability) => probability.map(0, 1, 0, canvas.height));

        context.clearCanvas();
        context.drawPoints(points, "#4903fc", 8);

        canvas.getBoundingClientRect();

        const probability = SimulationFunctions.calculateProbability(temperature, energyLevel, energyLevelCount, degeneracy.get(energyLevel)!);
        const lineX = temperature.map(0, AppConstants.HIGHEST_TEMPERATURE, 0, canvas.width)
        const lineY = probability.map(0, 1, 0, canvas.height)

        context.drawLine(lineX, 0, lineX, lineY, "#d41e9d", 8);
        context.drawSquare(lineX, lineY, 30, "#d15a15");
    }, [energyLevel, energyLevelCount, temperature, degeneracy]);

    return (
        <div className={styles.containerDiv}>
            <canvas
                ref={canvasRef}
                className={styles.canvas}
                width={2400}
                height={1200}
                onClickCapture={(event) => {
                    const canvas = new ExtendedCanvas(event.currentTarget as HTMLCanvasElement);
                    updateTemperature(canvas.getMouseX(event));
                }}
            />
            
            <div 
                data-tooltip-id="probability"
                className={styles.probabilityDiv}
            >
                <MathComponent tex={`P_${energyLevel} = ${SimulationFunctions.calculateProbability(temperature, energyLevel, energyLevelCount, degeneracy.get(energyLevel)!).toFixed(5)}`}/>
            </div>

            <TooltipComponent
                id="probability"
                content={<p>Current probability of energy level {energyLevel}.</p>}
            />
        </div>
    );
};

export default CanvasComponent;
