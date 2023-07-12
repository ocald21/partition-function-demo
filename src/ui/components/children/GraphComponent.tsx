import { FC, useEffect, useRef } from 'react';
import styles from '../../../css/children/GraphComponent.module.css';
import VariableProps from '../../props/VariableProps';
import SimulationContainer from '../../../SimulationContainer';
import { MathComponent } from 'mathjax-react';
import { CanvasRef } from '../../../types';

interface GraphProps extends VariableProps {
    verticalAxisLabel: JSX.Element
    horizontalAxisLabel: JSX.Element
    verticalAxisStep: number
    horizontalAxisStep: number
    maxY: number
    minY: number
    maxX: number
    minX: number
}

const GraphComponent: FC<GraphProps> = (props) => {
    const verticalRange = 
        Array.from(
            { length: (props.maxY - props.minY) / props.verticalAxisStep},
            (_, index) => index + 1
        )
        .reverse()
        .map(
            (value) => (value * props.verticalAxisStep).toPrecision(1)
        );
    const horizontalRange = 
        Array.from(
            { length: (props.maxX - props.minX) / props.horizontalAxisStep },
            (_, index) => index + 1
        ).map(
            (value) => (value * props.horizontalAxisStep)
        )
    const canvasRef = useRef<CanvasRef>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext('2d');

        if (!context) {
            return;
        }

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        const points = SimulationContainer.getCoordinatePairs(props.energyLevel, props.levelCount)

        context.strokeStyle = "#4903fc"
        context.lineWidth = 8;
        context.beginPath();

        points.forEach((probability, temperature) => {
            const mappedX = canvas.width * (temperature / SimulationContainer.HIGHEST_TEMPERATURE);
            const mappedY = canvas.height - (probability * canvas.height);

            context.lineTo(mappedX, mappedY);
        });

        context.stroke();
        context.closePath();
        
        context.strokeStyle = "#d41e9d"
        context.beginPath();

        const probability = 
            SimulationContainer.calculateProbability(
                props.temperature,
                props.energyLevel,
                props.levelCount
            );
        const mappedX = canvas.width * (props.temperature / SimulationContainer.HIGHEST_TEMPERATURE)
        const mappedY = canvas.height - (probability * canvas.height);

        context.moveTo(mappedX, canvas.height);
        context.lineTo(mappedX, mappedY);
        context.stroke();
        context.closePath();

        const rectSize = 30;
        context.fillStyle = "#d15a15";
        context.fillRect(mappedX - (rectSize / 2), mappedY - (rectSize / 2), rectSize, rectSize);
    }, [props.energyLevel, props.levelCount, props.temperature]);

    return ( 
        <div className={styles.graphComponentContainer}>
            <div className={styles.verticalAxisFormatting}>
                <div className={styles.verticalAxisLabel}>
                    {props.verticalAxisLabel}
                </div>

                <div className={styles.verticalAxisMarkings}>
                    {
                        verticalRange.map((value) => (
                            <p
                                key={value}
                                className={styles.verticalMarkingFormatting}
                            >
                                {value}
                            </p>
                        ))
                    }
                </div>
            </div>

            <div className={styles.graphContainer}>
                <canvas
                    ref={canvasRef}
                    className={styles.graphFormatting}
                    width={2400}
                    height={1200}
                />
                <div className={styles.probabilityContainer}>
                    <MathComponent 
                        tex={
                            `P_${props.energyLevel} = 
                                ${SimulationContainer.calculateProbability(props.temperature, props.energyLevel, props.levelCount).toFixed(5)}
                            `
                        }
                    />
                </div>
            </div>

            <div className={styles.horizontalAxisFormatting}>
                <div className={styles.horizontalAxisMarkings}>
                    {
                        horizontalRange.map((value) => (
                            <p
                                key={value}
                                className={styles.horizontalMarkingFormatting}
                                style={{
                                    width: `calc(100% / ${horizontalRange.length})`,
                                }}
                            >
                                {value}
                            </p>
                        ))
                    }
                </div>

                <div className={styles.horizontalAxisLabel}>
                    {props.horizontalAxisLabel}
                </div>
            </div>
        </div>
     );
}
 
export default GraphComponent;
