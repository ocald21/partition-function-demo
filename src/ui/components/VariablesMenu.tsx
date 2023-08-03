import { FC, useEffect } from "react";
import { MathComponent } from "mathjax-react";
import VariableComponent from "./children/VariableComponent";
import styles from "../../css/components/VariablesMenu.module.css";
import DynamicComponentProps from "../props/DynamicComponentProps";
import AppConstants from "../../AppConstants";
import { Tooltip } from "react-tooltip";

const VariablesMenu: FC<DynamicComponentProps> = (props) => {
    useEffect(() => {
        if (props.energyLevel >= props.levelCount - 1) {
            props.updateEnergyLevel(props.levelCount - 1);
        }
    }, [props.levelCount]);

    return(
        <div className={props.style}>
            <div className={styles.equationsDiv}>
                <div data-tooltip-id="q-fun">
                    <MathComponent
                        tex={String.raw`q = \sum\limits_{n=0}^s e^{\frac{-E_i}{kT}}`}
                    />
                </div>

                <div data-tooltip-id="p-fun">
                    <MathComponent 
                        tex={String.raw`P_${props.energyLevel} = \frac{e^{\frac{-E_${props.energyLevel}}{kT}}}{q}`}
                    />
                </div>

                <Tooltip
                    id="q-fun"
                    style={{
                        fontSize: 14,
                        maxWidth: "250px",
                    }}
                >
                    <h1>Partition Function</h1>
                    <p>
                        This function encodes how the probabilities are partitioned 
                        among the discrete microstates in a system based on their 
                        individual energies. In this demo, these energies are 
                        calculated as multiples of a constant.
                    </p>
                </Tooltip>

                <Tooltip
                    id="p-fun"
                    style={{
                        fontSize: 14,
                        maxWidth: "250px",
                    }}
                >
                    <h1>Probability Function</h1>
                    <p>
                        This function calculates the probability that the system
                        occupies microstate {props.energyLevel}. Change the
                        current microstate displayed by pressing either the
                        Energy Level buttons or bars on the top graph.
                    </p>
                </Tooltip>
            </div>

            <VariableComponent
                title="Energy Level (n)"
                value={props.energyLevel}
                incrementStep={1}
                lowestValue={AppConstants.LOWEST_ENERGY_LEVEL} 
                highestValue={props.levelCount - 1} 
                updateValue={props.updateEnergyLevel}
            />

            <VariableComponent
                title="Level Count (s)"
                value={props.levelCount}
                incrementStep={1}
                lowestValue={AppConstants.LOWEST_LEVEL_COUNT}
                highestValue={AppConstants.HIGHEST_ENERGY_LEVEL}
                updateValue={props.updateLevelCount}
            />

            <VariableComponent
                title="Temperature (K)"
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
