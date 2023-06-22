import React from 'react';
import VariableDisplayComponent from './VariableDisplayComponent';
import "../../../css/children/VariableComponent.css"
import ButtonComponent from './ButtonComponent';

interface VariableComponentProps {
    value: number
    incrementStep: number
    lowestValue: number
    highestValue: number
    updateValue: React.Dispatch<React.SetStateAction<number>>
}
 
const VariableComponent: React.FC<VariableComponentProps> = (props) => {
    const incrementEnergyLevel = () => {
        const newLevel = props.value + props.incrementStep > props.highestValue
            ? props.value
            : props.value + props.incrementStep;
        props.updateValue(newLevel);
    }

    const decrementEnergyLevel = () => {
        const newLevel = props.value - props.incrementStep < props.lowestValue
            ? props.value
            : props.value - props.incrementStep;
        props.updateValue(newLevel)
    }

    return ( 
        <div className="variable-component-formatting">
            <VariableDisplayComponent
                value={props.value}
            />

            <ButtonComponent 
                formatClass="green-button" 
                text={'+' + props.incrementStep}
                onClick={incrementEnergyLevel}
            />

            <ButtonComponent 
                formatClass="red-button"
                text={'-' + props.incrementStep}
                onClick={decrementEnergyLevel}
            />
        </div> 
    );
}
 
export default VariableComponent;
