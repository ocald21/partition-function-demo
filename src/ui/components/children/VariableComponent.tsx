import { Dispatch, FC, SetStateAction } from 'react';
import ButtonComponent from './ButtonComponent';
import buttonStyles from "../../../css/children/ButtonComponent.module.css";
import styles from "../../../css/children/VariableComponent.module.css"
import NumberVariableProps from '../../props/NumberVariableProps';
import StringVariableProps from '../../props/StringVariableProps';

interface VariableComponentProps extends NumberVariableProps, StringVariableProps {
    incrementStep: number
    lowestValue: number
    highestValue: number
    decimalPrecision: number
    updateValue: Dispatch<SetStateAction<number>>
}
 
export const VariableComponent: FC<VariableComponentProps> = ({
    title,
    value,
    incrementStep,
    lowestValue,
    highestValue,
    updateValue,
    decimalPrecision,
}) => {
    const incrementEnergyLevel = () => {
        const newLevel = value + incrementStep > highestValue ? highestValue : value + incrementStep;

        console.log(updateValue);
        
        updateValue(newLevel);
    }

    const decrementEnergyLevel = () => {
        const newLevel = value - incrementStep < lowestValue ? lowestValue : value - incrementStep;
        updateValue(newLevel)
    }

    return (
        <>
            <p 
                data-tooltip-id={title.replace(/\s/g, "")}
                className={styles.variableTitle}
            >
                {title}
            </p>

            <div className={styles.displayButtonDiv}>
                <p className={styles.variableDisplay}>
                    {value.toFixed(decimalPrecision)}
                </p>

                <ButtonComponent 
                    formatClass={buttonStyles.greenButton}
                    text={'+' + incrementStep}
                    onClick={incrementEnergyLevel}
                />

                <ButtonComponent 
                    formatClass={buttonStyles.redButton}
                    text={'-' + incrementStep}
                    onClick={decrementEnergyLevel}
                />
            </div> 
        </>
    );
}
