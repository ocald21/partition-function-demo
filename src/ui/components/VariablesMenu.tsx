import { FC, useEffect } from "react";
import { MathComponent } from "mathjax-react";
import VariableComponent from "./children/VariableComponent";
import styles from "../../css/components/VariablesMenu.module.css";
import DynamicComponentProps from "../props/DynamicComponentProps";
import AppConstants from "../../AppConstants";
import TooltipComponent from "./children/TooltipComponent";

export default const VariablesMenu: FC<DynamicComponentProps> = ({
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
                <div data-tooltip-id="q-fun">
                    <MathComponent
                        tex={String.raw`q = \sum\limits_{n=0}^s g_ie^{\frac{-E_i}{kT}}`}
                    />
                </div>

                <div data-tooltip-id="p-fun">
                    <MathComponent 
                        tex={String.raw`P_${props.energyLevel} = \frac{g_${props.energyLevel}e^{\frac{-E_${props.energyLevel}}{kT}}}{q}`}
                    />
                </div>

                <TooltipComponent 
                    id="q-fun"
                    content={<>
                        <h1>Partition Function</h1>
                        <p>
                            This function encodes how the probabilities are partitioned
                            among the discrete energy levels in a system based on their
                            individual energies. In this demo, these energies are
                            calculated as multiples of a constant and degeneracy is
                            applied to each energy level by a factor of the energy level
                            level + 1.
                        </p>
                    </>}
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
                decimalPrecision={0}
                lowestValue={AppConstants.LOWEST_ENERGY_LEVEL_COUNT}
                highestValue={AppConstants.HIGHEST_ENERGY_LEVEL_COUNT}
                updateValue={props.updateEnergyLevelCount}
            />

            <VariableComponent
                title="Temperature (K)"
                tooltip={<p>This changes the temperature in the system.</p>}
                value={props.temperature} 
                title={"Temperature (K)"}
                value={temperature} 
                incrementStep={1} 
                decimalPrecision={0}
                lowestValue={AppConstants.LOWEST_TEMPERATURE} 
                highestValue={AppConstants.HIGHEST_TEMPERATURE} 
                updateValue={props.updateTemperature}                
            />

            <VariableComponent 
                title="Degeneracy Factor (g)"
                tooltip={<p>This factor controls the amount of degeneracy applied to the probability, where 0 is no degeneracy and 1 is full degeneracy.</p>}
                value={props.degeneracy}
                incrementStep={1}
                decimalPrecision={0}
                lowestValue={AppConstants.LOWEST_DEGENERACY}
                highestValue={AppConstants.HIGHEST_DEGENERACY}
                updateValue={props.updateDegeneracy}
            />

            <VariableComponent
                title="Specific Level (n)"
                tooltip={<>This changes the current energy level focused.</>}
                value={props.energyLevel}
                incrementStep={1}
                decimalPrecision={0}
                lowestValue={AppConstants.LOWEST_ENERGY_LEVEL} 
                highestValue={props.energyLevelCount - 1} 
                updateValue={props.updateEnergyLevel}
            />
        </div>
    );
}