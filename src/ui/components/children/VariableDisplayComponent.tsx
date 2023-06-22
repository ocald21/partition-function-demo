import React from 'react';
import "../../../css/children/VariableDisplayComponent.css"

interface VariableDisplayComponentProps {
    value: number
}
 
const VariableDisplayComponent: React.FC<VariableDisplayComponentProps> = (props) => {
    return (
        <div className="variable-display-component-formatting">
            <p>{props.value}</p>
        </div>
     );
}
 
export default VariableDisplayComponent;
