import { FC, useEffect, useRef } from 'react';
import styles from '../../../css/children/LineGraphComponent.module.css';
import SimulationFunctions from '../../../SimulationFunctions';
import { MathComponent } from 'mathjax-react';
import CanvasRef from '../../../types/CanvasRef';
import AppConstants from '../../../AppConstants';
import DynamicGraphProps from '../../props/DynamicGraphProps';

const LineGraphComponent: FC<DynamicGraphProps> = (props) => {
    const verticalRange =
        SimulationFunctions.getNumberRange(
            props.minY, props.maxY, props.verticalAxisStep, 1, true
        );
    const horizontalRange =
        SimulationFunctions.getNumberRange(
            props.minX, props.maxX, props.horizontalAxisStep, 0, false
        );
    const canvasRef = useRef<CanvasRef>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext('2d');

        if (!context) {
            return;
        }

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        const points = SimulationFunctions.getCoordinatePairs(props.energyLevel, props.levelCount)

        context.strokeStyle = "#4903fc"
        context.lineWidth = 8;
        context.beginPath();

        points.forEach((probability, temperature) => {
            const mappedX = canvas.width * (temperature / AppConstants.HIGHEST_TEMPERATURE);
            const mappedY = canvas.height - (probability * canvas.height);

            context.lineTo(mappedX, mappedY);
        });

        context.stroke();
        context.closePath();
        
        context.strokeStyle = "#d41e9d"
        context.beginPath();

        const probability = 
            SimulationFunctions.calculateProbability(
                props.temperature,
                props.energyLevel,
                props.levelCount
            );
        const mappedX = canvas.width * (props.temperature / AppConstants.HIGHEST_TEMPERATURE)
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
        <div className={props.style}>
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
                                ${SimulationFunctions.calculateProbability(
                                    props.temperature, 
                                    props.energyLevel, 
                                    props.levelCount
                                 ).toFixed(5)
                                }
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
 
export default LineGraphComponent;
