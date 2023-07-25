import { FC } from 'react';
import SimulationFunctions from '../../SimulationFunctions';
import DynamicGraphProps from '../props/DynamicGraphProps';
import VerticalAxisComponent from './children/VerticalAxisComponent';
import HorizontalAxisComponent from './children/HorizontalAxisComponent';
import "../../extensions/CanvasExtensions.d.ts";
import "../../extensions/MapExtensions.d.ts"
import "../../extensions/NumberExtensions.d.ts"
import CanvasComponent from './children/CanvasComponent';
import GraphType from '../../types/GraphType';

const LineGraphComponent: FC<DynamicGraphProps> = (props) => {
    const verticalRange = SimulationFunctions.getNumberRange(props.minY, props.maxY, props.verticalAxisStep, 1, true);
    const horizontalRange = SimulationFunctions.getNumberRange(props.minX, props.maxX, props.horizontalAxisStep, 0, false);

    return ( 
        <div className={props.style}>
            <VerticalAxisComponent 
                numberRange={verticalRange}
                label={props.verticalAxisLabel}
            />

            <CanvasComponent {...props}/>

            <HorizontalAxisComponent
                type={GraphType.LINEAR}
                numberRange={horizontalRange}
                label={props.horizontalAxisLabel}
            />
        </div>
    );
}
 
export default LineGraphComponent;
