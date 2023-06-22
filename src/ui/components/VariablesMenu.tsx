import React from "react";
import "../../css/components/VariablesMenu.css"
import DynamicVariableProps from "../props/DynamicVariableProps";
import { MathComponent } from "mathjax-react";
import VariableComponent from "./children/VariableComponent";
import SimulationContainer from "../../SimulationVariables";

const VariablesMenu: React.FC<DynamicVariableProps> = (props) => {
    return(
        <div className="variables-formatting">
            <div className="math-component-formatting">
                <MathComponent
                    tex={String.raw`q = \sum\limits_{n=0}^s e^{\frac{-E_i}{kT}}`}
                />

                <MathComponent 
                    tex={String.raw`P_${props.energyLevel} = \frac{e^{\frac{-E_${props.energyLevel}}{kT}}}{q}`}
                />
            </div>

            <p className="variable-name">
                Energy Level (n)
            </p>

            <VariableComponent 
                value={props.energyLevel}
                incrementStep={1} 
                lowestValue={SimulationContainer.LOWEST_ENERGY_LEVEL} 
                highestValue={SimulationContainer.HIGHEST_ENERGY_LEVEL - 1} 
                updateValue={props.updateEnergyLevel}
            />

            <p className="variable-name">
                Level Count (s)
            </p>

            <VariableComponent 
                value={props.levelCount}
                incrementStep={1}
                lowestValue={SimulationContainer.LOWEST_ENERGY_LEVEL + 2}
                highestValue={SimulationContainer.HIGHEST_ENERGY_LEVEL}
                updateValue={props.updateLevelCount}
            />

            <p className="variable-name">
                Temperature (K)
            </p>

            <VariableComponent 
                value={props.temperature} 
                incrementStep={10} 
                lowestValue={SimulationContainer.LOWEST_TEMPERATURE} 
                highestValue={SimulationContainer.HIGHEST_TEMPERATURE} 
                updateValue={props.updateTemperature}                
            />
        </div>
    );
}

export default VariablesMenu;
