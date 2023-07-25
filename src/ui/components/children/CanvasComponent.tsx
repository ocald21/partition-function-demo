import { FC, useEffect, useRef } from "react";
import styles from "../../../css/children/CanvasComponent.module.css";
import { MathComponent } from "mathjax-react";
import SimulationFunctions from "../../../SimulationFunctions";
import AppConstants from "../../../AppConstants";
import DynamicComponentProps from "../../props/DynamicComponentProps";

const CanvasComponent: FC<DynamicComponentProps> = (props) => {
    const canvasRef = useRef<CanvasRef>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext('2d')!;
        const points = SimulationFunctions.getCoordinatePairs(props.energyLevel, props.levelCount)
            .mapKeys((temperature) => temperature.map(0, AppConstants.HIGHEST_TEMPERATURE, 0, canvas.width))
            .mapValues((probability) => probability.map(0, 1, 0, canvas.height));

        context.clearCanvas();
        context.drawPoints(points, "#4903fc", 8);

        const probability = SimulationFunctions.calculateProbability(props.temperature, props.energyLevel, props.levelCount);
        const lineX = props.temperature.map(0, AppConstants.HIGHEST_TEMPERATURE, 0, canvas.width)
        const lineY = probability.map(0, 1, 0, canvas.height)

        context.drawLine(lineX, 0, lineX, lineY, "#d41e9d", 8);
        context.drawSquare(lineX, lineY, 30, "#d15a15");
    }, [props.energyLevel, props.levelCount, props.temperature]);

    return (
        <div className={styles.containerDiv}>
            <canvas
                ref={canvasRef}
                className={styles.canvas}
                width={2400}
                height={1200}
            />
            <div className={styles.probabilityDiv}>
                <MathComponent tex={`P_${props.energyLevel} = ${SimulationFunctions.calculateProbability(props.temperature, props.energyLevel, props.levelCount).toFixed(5)}`}/>
            </div>
        </div>
    );
};

export default CanvasComponent;
