import { Dispatch, FC, SetStateAction } from 'react';
import ButtonComponent from './ButtonComponent';
import buttonStyles from "../../../css/children/ButtonComponent.module.css";
import styles from "../../../css/children/VariableComponent.module.css"
import NumberVariableProps from '../../props/NumberVariableProps';
import StringVariableProps from '../../props/StringVariableProps';
import TooltipComponent from './TooltipComponent';

interface VariableComponentProps extends NumberVariableProps, StringVariableProps {
    tooltip: ReactElement
    incrementStep: number
    lowestValue: number
    highestValue: number
    decimalPrecision: number
    updateValue: Dispatch<SetStateAction<number>>
}
 
const VariableComponent: FC<VariableComponentProps> = (props) => {
    const incrementEnergyLevel = () => {
        const newLevel = props.value + props.incrementStep > props.highestValue
            ? props.highestValue : props.value + props.incrementStep;
        props.updateValue(newLevel);
    }

    const decrementEnergyLevel = () => {
        const newLevel = props.value - props.incrementStep < props.lowestValue
            ? props.lowestValue : props.value - props.incrementStep;
        props.updateValue(newLevel)
    }

    return (
        <>
            <p 
                data-tooltip-id={props.title.replace(/\s/g, "")}
                className={styles.variableTitle}
            >
                {props.title}
            </p>

            <TooltipComponent 
                id={props.title.replace(/\s/g, "")}
                content={props.tooltip}
            />

            <div className={styles.displayButtonDiv}>
                <p className={styles.variableDisplay}>
                    {props.value.toFixed(props.decimalPrecision)}
                </p>

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
        </>
    );
}
 
export default VariableComponent;
