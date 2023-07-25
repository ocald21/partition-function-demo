import { FC } from "react";
import SimulationFunctions from "../../SimulationFunctions";
import DynamicGraphProps from "../props/DynamicGraphProps";
import VerticalAxisComponent from "./children/VerticalAxisComponent";
import HorizontalAxisComponent from "./children/HorizontalAxisComponent";
import GraphType from "../../types/GraphType";
import BarCanvasComponent from "./children/BarCanvasComponent";
 
const BarGraphComponent: FC<DynamicGraphProps> = (props) => {
    const verticalRange = SimulationFunctions.getNumberRange(props.minY, props.maxY, props.verticalAxisStep, 1, true);
    const horizontalRange = SimulationFunctions.getRange(props.levelCount, 1, 0, false);
        
    return ( 
        <div className={props.style}>
            <VerticalAxisComponent 
                numberRange={verticalRange}
                label={props.verticalAxisLabel}
            />
            
            <BarCanvasComponent 
                horizontalRange={horizontalRange}
                { ...props }
            />

            <HorizontalAxisComponent
                type={GraphType.BAR}
                numberRange={horizontalRange}
                label={props.horizontalAxisLabel}
            />
        </div>
    );
}
 
export default BarGraphComponent;
