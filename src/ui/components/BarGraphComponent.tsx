import { FC } from "react";
import barStyles from "../../css/BarGraphComponent.module.css";
import planeStyles from "../../css/LineGraphComponent.module.css"
import SimulationFunctions from "../../SimulationFunctions";
import DynamicGraphProps from "../props/DynamicGraphProps";
import VerticalAxisComponent from "./children/VerticalAxisComponent";
 
const BarGraphComponent: FC<DynamicGraphProps> = (props) => {
    const verticalRange = 
        SimulationFunctions.getNumberRange(
            props.minY, props.maxY, props.verticalAxisStep, 1, true
        );
    const horizontalRange =
        SimulationFunctions.getRange(
            props.levelCount, 1, 0, false
        )
        
    return ( 
        <div className={props.style}>
            <VerticalAxisComponent 
                numberRange={verticalRange}
                label={props.verticalAxisLabel}
            />

            <div className={barStyles.graphContainer}>
                {
                    horizontalRange.map((value) => (
                        <div 
                            key={value}
                            className={barStyles.boxDivFormatting}
                            style={{
                                marginLeft: `calc(100% / 4 / ${props.levelCount})`,
                                marginRight: `calc(100% / 4 / ${props.levelCount})`,
                            }}
                        >
                            <div 
                                className={barStyles.shadedDivFormatting}
                                style={
                                    {
                                        backgroundColor: parseInt(value) == props.energyLevel ? "cyan" : "#4903fc",
                                        height: `${SimulationFunctions.calculateProbability(props.temperature, parseInt(value), props.levelCount)*100}%`,
                                    }
                                }
                                onClick={() => { props.updateEnergyLevel(parseInt(value)) }}
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
                        horizontalRange.map((value) => (
                            <div
                                key={value}
                                className={barStyles.horizontalMarkingFormatting}
                                style={
                                    {
                                        marginLeft: `calc(100% / 4 / ${props.levelCount})`,
                                        marginRight: `calc(100% / 4 / ${props.levelCount})`,
                                    }
                                }
                            >
                                {value}
                            </div>
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
