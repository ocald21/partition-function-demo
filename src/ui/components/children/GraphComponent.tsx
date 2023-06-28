import { useEffect, FC, createRef } from 'react';
import styles from '../../../css/children/GraphComponent.module.css';
import React from 'react';

interface GraphProps {
    verticalAxisLabel: JSX.Element
    horizontalAxisLabel: JSX.Element
    // verticalAxisStep: number
    // horizontalAxisStep: number
    // maxY: number
    // minY: number
    // maxX: number
    // minX: number
}
 
const GraphComponent: FC<GraphProps> = (props) => {
    return ( 
        <div className={styles.graphComponentContainer}>
            <div className={styles.verticalAxisFormatting}>
                <div className={styles.verticalAxisLabel}>

                </div>
                <canvas
                    id="vertical-canvas"
                    className={styles.verticalAxisMarkings}
                    width={20}
                    height={100}
                >
                </canvas>
            </div>

            <div className={styles.graphContainer}>

            </div>

            <div className={styles.horizontalAxisFormatting}>
                <div className={styles.horizontalAxisLabel}>
                
                </div>
            </div>
        </div>
     );
}
 
export default GraphComponent;
function useState(arg0: CanvasRenderingContext2D | null): [any, any] {
    throw new Error('Function not implemented.');
}

