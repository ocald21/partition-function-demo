import { FC, useEffect } from "react";
import { MathComponent } from "mathjax-react";
import VariableComponent from "./children/VariableComponent";
import styles from "../../css/components/VariablesMenu.module.css";
import DynamicComponentProps from "../props/DynamicComponentProps";
import AppConstants from "../../AppConstants";
import TooltipComponent from "./children/TooltipComponent";

const VariablesMenu: FC<DynamicComponentProps> = (props) => {
    useEffect(() => {
        if (props.microstate >= props.microstateCount - 1) {
            props.updateMicrostate(props.microstateCount - 1);
        }
    }, [props.microstateCount]);

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
                        tex={String.raw`P_${props.microstate} = \frac{g_${props.microstate}e^{\frac{-E_${props.microstate}}{kT}}}{q}`}
                    />
                </div>

                <TooltipComponent 
                    id="q-fun"
                    content={<>
                        <h1>Partition Function</h1>
                        <p>
                            This function encodes how the probabilities are partitioned
                            among the discrete microstates in a system based on their
                            individual energies. In this demo, these energies are
                            calculated as multiples of a constant and degeneracy is
                            applied to each microstate by a factor of the microstate
                            level + 1   .
                        </p>
                    </>}
                />

                <TooltipComponent
                    id="p-fun"
                    content={<>
                        <h1>Probability Function</h1>
                        <p>
                            This function calculates the probability that the system
                            occupies microstate {props.microstate}. Change the
                            current microstate displayed by pressing either the
                            microstate buttons or bars on the top graph.
                        </p>
                    </>}
                />
            </div>

            <VariableComponent
                title="Microstate (n)"
                tooltip={<>This changes the current microstate focused.</>}
                value={props.microstate}
                incrementStep={1}
                decimalPrecision={0}
                lowestValue={AppConstants.LOWEST_MICROSTATE} 
                highestValue={props.microstateCount - 1} 
                updateValue={props.updateMicrostate}
            />

            <VariableComponent
                title="Microstate Count (s)"
                tooltip={<p>This changes the amount of microstates that can be occupied.</p>}
                value={props.microstateCount}
                incrementStep={1}
                decimalPrecision={0}
                lowestValue={AppConstants.LOWEST_MICROSTATE_COUNT}
                highestValue={AppConstants.HIGHEST_MICROSTATE}
                updateValue={props.updateMicrostateCount}
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
                incrementStep={0.01}
                decimalPrecision={2}
                lowestValue={AppConstants.LOWEST_DEGENERACY}
                highestValue={AppConstants.HIGHEST_DEGENERACY}
                updateValue={props.updateDegeneracy}
            />
        </div>
    );
}

export default VariablesMenu;
