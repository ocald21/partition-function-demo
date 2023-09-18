import { FC } from "react";
import DynamicGraphProps from "../props/DynamicGraphProps";
import VerticalAxisComponent from "./children/VerticalAxisComponent";
import HorizontalAxisComponent from "./children/HorizontalAxisComponent";
import GraphType from "../../types/GraphType";
import { SimulationContainer } from "../../SimulationFunctions";
import { BarCanvasComponent } from "./children/BarCanvasComponent";
 
export const BarGraphComponent: FC<DynamicGraphProps> = ({
    minX, minY, maxY,
    verticalAxisStep,
    verticalAxisLabel,
    horizontalAxisLabel,
    energyLevelCount,
    style,
    ...props
}) => {
    const verticalRange = SimulationContainer.getNumberRange(minY, maxY, verticalAxisStep, 1, true);
    const horizontalRange = SimulationContainer.getRange(energyLevelCount, 1, 0, false);
        
    return ( 
        <div className={style}>
            <VerticalAxisComponent 
                numberRange={verticalRange}
                label={verticalAxisLabel}
            />
            
            <BarCanvasComponent 
                style={style} 
                energyLevelCount={energyLevelCount} 
                horizontalRange={horizontalRange}
                {...props}            
            />

            <HorizontalAxisComponent
                type={GraphType.BAR}
                numberRange={horizontalRange}
                label={horizontalAxisLabel}
            />
        </div>
    );
}
