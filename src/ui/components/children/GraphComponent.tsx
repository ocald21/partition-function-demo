import { FC, useEffect, useRef } from 'react';
import styles from '../../../css/children/GraphComponent.module.css';
import VariableProps from '../../props/VariableProps';

type CanvasRef = HTMLCanvasElement | null;

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

        const strokeStyles = [rgb()]

        
        context.strokeStyle = "#FF0000"
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(1000, 500);
        context.stroke();
        // context.closePath();

    }, []);

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
                    width={1000}
                    height={500}
                    
                >

                </canvas>
            </div>

            <div className={styles.horizontalAxisFormatting}>
                <div className={styles.horizontalAxisMarkings}>
                    {
                        horizontalRange.map((value) => (
                            <p
                                key={value}
                                className={styles.horizontalMarkingFormatting}
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
function rgb() {
    throw new Error('Function not implemented.');
}

