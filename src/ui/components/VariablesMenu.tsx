import { FC, useEffect } from "react";
import { MathComponent } from "mathjax-react";
import VariableComponent from "./children/VariableComponent";
import styles from "../../css/components/VariablesMenu.module.css";
import DynamicComponentProps from "../props/DynamicComponentProps";
import AppConstants from "../../AppConstants";
import TooltipComponent from "./children/TooltipComponent";

const VariablesMenu: FC<DynamicComponentProps> = (props) => {
    useEffect(() => {
        if (props.energyLevel >= props.energyLevelCount - 1) {
            props.updateEnergyLevel(props.energyLevelCount - 1);
        }
    }, [props.energyLevelCount]);

    return(
        <div className={props.style}>
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

                <TooltipComponent
                    id="p-fun"
                    content={<>
                        <h1>Probability Function</h1>
                        <p>
                            This function calculates the probability that the system
                            occupies energy level {props.energyLevel}. Change the
                            current energy level displayed by pressing either the
                            energy level buttons or bars on the top graph.
                        </p>
                    </>}
                />
            </div>

            <VariableComponent
                title="Energy Level Count (s)"
                tooltip={<p>This changes the amount of energy levels that can be occupied.</p>}
                value={props.energyLevelCount}
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

export default VariablesMenu;
