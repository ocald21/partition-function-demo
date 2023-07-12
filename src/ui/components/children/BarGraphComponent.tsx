import { FC } from "react";
import barStyles from "../../../css/children/BarGraphComponent.module.css";
import planeStyles from "../../../css/children/GraphComponent.module.css"
import SimulationContainer from "../../../SimulationContainer";
import DynamicVariableProps from "../../props/DynamicVariableProps";

interface BarGraphComponentProps extends DynamicVariableProps {
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

            <div className={barStyles.graphContainer}>
                {
                    Array.from(
                        { length: props.levelCount },
                        (_, index) => index
                    )
                    .map((value) => (
                        <div 
                            key={value}
                            className={barStyles.boxDivFormatting}
                        >
                            <div 
                                className={barStyles.shadedDivFormatting}
                                style={
                                    {
                                        marginLeft: `${250 / props.levelCount}px`,
                                        marginRight: `${250 / props.levelCount}px`,
                                        backgroundColor: value == props.energyLevel ? "#4903fc" : "cyan",
                                        height: `${SimulationContainer.calculateProbability(props.temperature, value, props.levelCount)*100}%`,
                                    }
                                }
                                onClick={() => { props.updateEnergyLevel(value) }}
                                
                            >
                                
                                {value}
                            </div>
                        </div>
                    ))
                }
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
                                        marginRight: `${250 / props.levelCount}px`,
                                        marginLeft: `${250 / props.levelCount}px`,
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
