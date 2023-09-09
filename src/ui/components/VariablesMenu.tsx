import { FC, useEffect } from "react";
import { MathComponent } from "mathjax-react";
import VariableComponent from "./children/VariableComponent";
import styles from "../../css/components/VariablesMenu.module.css";
import DynamicComponentProps from "../props/DynamicComponentProps";
import AppConstants from "../../AppConstants";

const VariablesMenu: FC<DynamicComponentProps> = ({
    energyLevel,
    levelCount,
    temperature,
    updateEnergyLevel,
    updateLevelCount,
    updateTemperature,
    style,
}) => {
    useEffect(() => {
        if (energyLevel >= levelCount - 1) {
            updateEnergyLevel(levelCount - 1);
        }
    }, [levelCount]);

    return(
        <div className={style}>
            <div className={styles.equationsDiv}>
                <MathComponent
                    tex={String.raw`q = \sum\limits_{n=0}^s e^{\frac{-E_i}{kT}}`}
                />

                <MathComponent 
                    tex={String.raw`P_${energyLevel} = \frac{e^{\frac{-E_${energyLevel}}{kT}}}{q}`}
                />
            </div>

            <VariableComponent
                title={"Energy Level (n)"}
                value={energyLevel}
                incrementStep={1} 
                lowestValue={AppConstants.LOWEST_ENERGY_LEVEL} 
                highestValue={levelCount - 1} 
                updateValue={updateEnergyLevel}
            />

            <VariableComponent
                title={"Level Count (s)"}
                value={levelCount}
                incrementStep={1}
                lowestValue={AppConstants.LOWEST_LEVEL_COUNT}
                highestValue={AppConstants.HIGHEST_ENERGY_LEVEL}
                updateValue={updateLevelCount}
            />

            <VariableComponent
                title={"Temperature (K)"}
                value={temperature} 
                incrementStep={1} 
                lowestValue={AppConstants.LOWEST_TEMPERATURE} 
                highestValue={AppConstants.HIGHEST_TEMPERATURE} 
                updateValue={updateTemperature}                
            />
        </div>
    );
}

export default VariablesMenu;
