import { FC, useEffect, useRef } from "react";
import VariableProps from "../../props/VariableProps";
import barStyles from "../../../css/children/BarGraphComponent.module.css";
import planeStyles from "../../../css/children/GraphComponent.module.css"
import { CanvasRef } from "../../../types";
import SimulationContainer from "../../../SimulationContainer";

interface BarGraphComponentProps extends VariableProps {
    verticalAxisLabel: JSX.Element
    horizontalAxisLabel: JSX.Element
    verticalAxisStep: number
    maxY: number
    minY: number
}
 
const BarGraphComponent: FC<BarGraphComponentProps> = (props) => {
    const verticalRange = 
        Array.from(
            { length: (props.maxY - props.minY) / props.verticalAxisStep},
            (_, index) => index + 1
        )
        .reverse()
        .map(
            (value) => (value * props.verticalAxisStep).toPrecision(1)
        );
    const canvasRef = useRef<CanvasRef>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext('2d');

        if (!context) {
            return;
        }

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        const probabilities = SimulationContainer.getProbabilityPairs(props.temperature, props.levelCount);
    
        context.strokeStyle = "#84fc03"; //unfocused color
        context.strokeStyle = "#4903fc"; //focused color

        const horizontalMargin = 150 / props.levelCount;

        context.lineWidth = 8;
        const rectSize = 100;
        const totalBoxWidth = 

        console.log("temperature: " + props.temperature + " levelCount: " + props.levelCount);
        probabilities.forEach((probability, energyLevel) => {
            const mappedX =
                (canvas.width / 2) + 
                ((energyLevel > (props.levelCount / 2) ? 1 : -1) *
                 (150 / props.levelCount) * energyLevel * 2
                )
            const mappedY = canvas.height - (probability * canvas.height);

            console.log("mappedX: " + mappedX + " mappedY: " + mappedY);
            // context.strokeRect(0, mappedY, canvas.width / 2, canvas.height / 2);
            // context.strokeRect(
            //     mappedX - (rectSize / 2), 
            //     mappedY - (rectSize / 2), 
            //     rectSize,
            //     mappedY + (rectSize / 2),
            // )
        });

    }, [props.temperature, props.levelCount, props.energyLevel]);

    return ( 
        <div className={barStyles.barGraphComponentContainer}>
            <div className={planeStyles.verticalAxisFormatting}>
                <div className={planeStyles.verticalAxisLabel}>
                    {props.verticalAxisLabel}
                </div>

                <div className={planeStyles.verticalAxisMarkings}>
                    {
                        verticalRange.map((value) => (
                            <p
                                key={value}
                                className={planeStyles.verticalMarkingFormatting}
                            >
                                {value}
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className={planeStyles.graphContainer}>
                <canvas 
                    ref={canvasRef}
                    className={planeStyles.graphFormatting}
                    width={2400}
                    height={1200}
                />
            </div>

            <div className={planeStyles.horizontalAxisFormatting}>
                <div className={barStyles.horizontalAxisMarkings}>
                    {
                        Array.from(
                            { length: props.levelCount },
                            (_, index) => index
                        )
                        .map((value) => (
                            <p
                                key={value}
                                className={barStyles.horizontalMarkingFormatting}
                                style={
                                    {
                                        marginRight: `${150 / props.levelCount}px`,
                                        marginLeft: `${150 / props.levelCount}px`,
                                    }
                                }
                            >
                                {value}
                            </p>
                        ))
                    }
                </div>

                <div className={planeStyles.horizontalAxisLabel}>
                    {props.horizontalAxisLabel}
                </div>
            </div>
        </div>
    );
}
 
export default BarGraphComponent;
