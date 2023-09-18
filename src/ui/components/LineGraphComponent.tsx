import { FC } from 'react';
import DynamicGraphProps from '../props/DynamicGraphProps';
import VerticalAxisComponent from './children/VerticalAxisComponent';
import HorizontalAxisComponent from './children/HorizontalAxisComponent';
import "../../extensions/CanvasRenderingContext2D";
import "../../extensions/MapExtensions.d.ts"
import "../../extensions/NumberExtensions.d.ts"
import CanvasComponent from './children/CanvasComponent';
import GraphType from '../../types/GraphType';
import { SimulationContainer } from '../../SimulationFunctions';

export const LineGraphComponent: FC<DynamicGraphProps> = ({
    minX, maxX,
    minY, maxY,
    horizontalAxisStep,
    horizontalAxisLabel,
    verticalAxisStep,
    verticalAxisLabel,
    style,
    ...props
}) => {
    const verticalRange = SimulationContainer.getNumberRange(minY, maxY, verticalAxisStep, 1, true);
    const horizontalRange = SimulationContainer.getNumberRange(minX, maxX, horizontalAxisStep, 0, false);

    return ( 
        <div className={style}>
            <VerticalAxisComponent 
                numberRange={verticalRange}
                label={verticalAxisLabel}
            />

            <CanvasComponent style={style} {...props}/>

            <HorizontalAxisComponent
                type={GraphType.LINEAR}
                numberRange={horizontalRange}
                label={horizontalAxisLabel}
            />
        </div>
    );
}
