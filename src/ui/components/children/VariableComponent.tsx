import React, { FC } from 'react';
import "../../../css/children/VariableComponent.css"

interface VariableComponentProps {
    value: number
}
 
const VariableComponent: FC<VariableComponentProps> = (props) => {
    return (
        <p className="variable-component-formatting">{props.value}</p>
     );
}
 
export default VariableComponent;
