import { FC } from "react";
import barStyles from "../../../css/children/BarGraphComponent.module.css";
import planeStyles from "../../../css/children/LineGraphComponent.module.css"
import SimulationFunctions from "../../../SimulationFunctions";
import DynamicGraphProps from "../../props/DynamicGraphProps";
 
const BarGraphComponent: FC<DynamicGraphProps> = (props) => {
    const verticalRange = 
        SimulationFunctions.getNumberRange(
            props.minY, props.maxY, props.verticalAxisStep, 1, true
        );
        
    return ( 
        <div className={props.style}>
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
                                        height: `${SimulationFunctions.calculateProbability(props.temperature, value, props.levelCount)*100}%`,
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
