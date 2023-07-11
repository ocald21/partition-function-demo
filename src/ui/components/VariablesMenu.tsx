import React from "react";
import DynamicVariableProps from "../props/DynamicVariableProps";
import { MathComponent } from "mathjax-react";
import VariableComponent from "./children/VariableComponent";
import SimulationContainer from "../../SimulationContainer";
import styles from "../../css/components/VariablesMenu.module.css";

const VariablesMenu: React.FC<DynamicVariableProps> = (props) => {
    return(
        <div className={styles.variablesFormatting}>
            <div className={styles.mathComponentFormatting}>
                <MathComponent
                    tex={String.raw`q = \sum\limits_{n=0}^s e^{\frac{-E_i}{kT}}`}
                />

                <MathComponent 
                    tex={String.raw`P_${props.energyLevel} = \frac{e^{\frac{-E_${props.energyLevel}}{kT}}}{q}`}
                />
            </div>

            <p className={styles.variableName}>
                Energy Level (n)
            </p>

            <VariableComponent 
                value={props.energyLevel}
                incrementStep={1} 
                lowestValue={SimulationContainer.LOWEST_ENERGY_LEVEL} 
                highestValue={props.levelCount - 1} 
                updateValue={props.updateEnergyLevel}
            />

            <p className={styles.variableName}>
                Level Count (s)
            </p>

            <VariableComponent 
                value={props.levelCount}
                incrementStep={1}
                lowestValue={SimulationContainer.LOWEST_LEVEL_COUNT}
                highestValue={SimulationContainer.HIGHEST_ENERGY_LEVEL}
                updateValue={props.updateLevelCount}
            />

            <p className={styles.variableName}>
                Temperature (K)
            </p>

            <VariableComponent 
                value={props.temperature} 
                incrementStep={1} 
                lowestValue={SimulationContainer.LOWEST_TEMPERATURE} 
                highestValue={SimulationContainer.HIGHEST_TEMPERATURE} 
                updateValue={props.updateTemperature}                
            />
        </div>
    );
}

export default VariablesMenu;
