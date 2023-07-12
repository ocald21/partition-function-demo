import { Dispatch, FC, SetStateAction } from 'react';
import VariableDisplayComponent from './VariableDisplayComponent';
import ButtonComponent from './ButtonComponent';
import buttonStyles from "../../../css/children/ButtonComponent.module.css";
import styles from "../../../css/children/VariableComponent.module.css"

interface VariableComponentProps {
    value: number
    incrementStep: number
    lowestValue: number
    highestValue: number
    updateValue: Dispatch<SetStateAction<number>>
}
 
const VariableComponent: FC<VariableComponentProps> = (props) => {
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
        <div className={styles.variableComponentFormatting}>
            <VariableDisplayComponent
                value={props.value}
            />

            <ButtonComponent 
                formatClass={buttonStyles.greenButton}
                text={'+' + props.incrementStep}
                onClick={incrementEnergyLevel}
            />

            <ButtonComponent 
                formatClass={buttonStyles.redButton}
                text={'-' + props.incrementStep}
                onClick={decrementEnergyLevel}
            />
        </div> 
    );
}
 
export default VariableComponent;
