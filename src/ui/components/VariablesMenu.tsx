import React, { FC } from "react";
import "../../css/components/VariablesMenu.css"
import DynamicVariableProps from "../props/DynamicVariableProps";
import { MathComponent } from "mathjax-react";
import VariableDisplayComponent from "./children/VariableDisplayComponent";
import ButtonComponent from "./children/ButtonComponent";
import SimulationVariables from "../../SimulationVariables"

const VariablesMenu: FC<DynamicVariableProps> = (props) => {
    const incrementEnergyLevel = () => {
        const newLevel = props.energyLevel === SimulationVariables.HIGHEST_ENERGY_LEVEL
            ? props.energyLevel
            : props.energyLevel + 1;
        props.updateEnergyLevel(newLevel);
    }

    const decrementEnergyLevel = () => {
        const newLevel = props.energyLevel === 0
            ? props.energyLevel
            : props.energyLevel - 1;
        props.updateEnergyLevel(newLevel)
    }

    return(
        <div className="variables-formatting">
            <MathComponent
                    tex={String.raw`q = \sum\limits_{n=0}^s e^{\frac{-E_i}{kT}}`}
                />

            <MathComponent 
                tex={String.raw`P_${props.energyLevel} = \frac{e^{\frac{-E_${props.energyLevel}}{kT}}}{q}`}
            />

            <div className="variable-container">
                <div className="variable-name">
                    <p>a</p>
                </div>

                <div className="variable-buttons">
                    <VariableDisplayComponent value={props.energyLevel}/>

                    <ButtonComponent 
                        formatClass="blue-button" 
                        text="+1"
                        onClick={incrementEnergyLevel}
                    />

                    <ButtonComponent 
                        formatClass="red-button"
                        text="-1"
                        onClick={decrementEnergyLevel}
                    />
                </div>
            </div>
        </div>
    );
}

export default VariablesMenu;
