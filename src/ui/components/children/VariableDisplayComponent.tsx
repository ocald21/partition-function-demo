import React, { CSSProperties } from 'react';
import styles from "../../../css/children/VariableDisplayComponent.module.css"

interface VariableDisplayComponentProps {
    value: number
}
 
const VariableDisplayComponent: React.FC<VariableDisplayComponentProps> = (props) => {
    return (
        <div className={styles.variableDisplayComponentFormatting}>
            <p>{props.value}</p>
        </div>
     );
}
 
export default VariableDisplayComponent;
