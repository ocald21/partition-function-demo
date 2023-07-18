import { FC, useEffect } from "react";
import { MathComponent } from "mathjax-react";
import VariableComponent from "./children/VariableComponent";
import SimulationContainer from "../../SimulationFunctions";
import styles from "../../css/components/VariablesMenu.module.css";
import DynamicComponentProps from "../props/DynamicComponentProps";
import AppConstants from "../../AppConstants";

const VariablesMenu: FC<DynamicComponentProps> = (props) => {
    useEffect(() => {
        if (props.energyLevel >= props.levelCount - 1) {
            props.updateEnergyLevel(props.levelCount - 1);
        }
    }, [props.levelCount]);

    return(
        <div className={props.style}>
            <div className={styles.equationsDiv}>
                <MathComponent
                    tex={String.raw`q = \sum\limits_{n=0}^s e^{\frac{-E_i}{kT}}`}
                />

                <MathComponent 
                    tex={String.raw`P_${props.energyLevel} = \frac{e^{\frac{-E_${props.energyLevel}}{kT}}}{q}`}
                />
            </div>

            <VariableComponent
                title={"Energy Level (n)"}
                value={props.energyLevel}
                incrementStep={1} 
                lowestValue={AppConstants.LOWEST_ENERGY_LEVEL} 
                highestValue={props.levelCount - 1} 
                updateValue={props.updateEnergyLevel}
            />

            <VariableComponent
                title={"Level Count (s)"}
                value={props.levelCount}
                incrementStep={1}
                lowestValue={AppConstants.LOWEST_LEVEL_COUNT}
                highestValue={AppConstants.HIGHEST_ENERGY_LEVEL}
                updateValue={props.updateLevelCount}
            />

            <VariableComponent
                title={"Temperature (K)"}
                value={props.temperature} 
                incrementStep={1} 
                lowestValue={AppConstants.LOWEST_TEMPERATURE} 
                highestValue={AppConstants.HIGHEST_TEMPERATURE} 
                updateValue={props.updateTemperature}                
            />
        </div>
    );
}

export default VariablesMenu;
