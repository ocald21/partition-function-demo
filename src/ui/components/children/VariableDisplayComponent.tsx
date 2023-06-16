import React, { FC } from 'react';
import "../../../css/children/VariableDisplayComponent.css"

interface VariableDisplayComponentProps {
    value: number
}
 
const VariableComponent: FC<VariableDisplayComponentProps> = (props) => {
    return (
        <div className="variable-display-component-formatting">
            <p>{props.value}</p>
        </div>
     );
}
 
export default VariableComponent;
