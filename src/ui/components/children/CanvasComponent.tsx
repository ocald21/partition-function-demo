import { FC, useEffect, useRef } from "react";
import styles from "../../../css/children/CanvasComponent.module.css";
import { MathComponent } from "mathjax-react";
import SimulationFunctions from "../../../SimulationFunctions";
import AppConstants from "../../../AppConstants";
import DynamicComponentProps from "../../props/DynamicComponentProps";
import TooltipComponent from "./TooltipComponent";

const CanvasComponent: FC<DynamicComponentProps> = ({ 
    temperature, 
    microstate, 
    microstateCount, 
    degeneracy,
}) => {
    const canvasRef = useRef<CanvasRef>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext('2d')!;
        const points = SimulationFunctions.getCoordinatePairs(microstate, microstateCount, degeneracy)
            .mapKeys((temperature) => temperature.map(0, AppConstants.HIGHEST_TEMPERATURE, 0, canvas.width))
            .mapValues((probability) => probability.map(0, 1, 0, canvas.height));

        context.clearCanvas();
        context.drawPoints(points, "#4903fc", 8);

        const probability = SimulationFunctions.calculateProbability(temperature, microstate, microstateCount, degeneracy);
        const lineX = temperature.map(0, AppConstants.HIGHEST_TEMPERATURE, 0, canvas.width)
        const lineY = probability.map(0, 1, 0, canvas.height)

        context.drawLine(lineX, 0, lineX, lineY, "#d41e9d", 8);
        context.drawSquare(lineX, lineY, 30, "#d15a15");
    }, [microstate, microstateCount, temperature, degeneracy]);

    return (
        <div className={styles.containerDiv}>
            <canvas
                ref={canvasRef}
                className={styles.canvas}
                width={2400}
                height={1200}
            />
            
            <div 
                data-tooltip-id="probability"
                className={styles.probabilityDiv}
            >
                <MathComponent tex={`P_${microstate} = ${SimulationFunctions.calculateProbability(temperature, microstate, microstateCount, degeneracy).toFixed(5)}`}/>
            </div>

            <TooltipComponent
                id="probability"
                content={<p>Current probability of microstate {microstate}.</p>}
            />
        </div>
    );
};

export default CanvasComponent;
