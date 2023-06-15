import React, { FC } from "react";
import "../../css/children/VariableComponent.css"
import DynamicVariableProps from "../props/DynamicVariableProps";
import { MathComponent } from "mathjax-react";
 
const VariablesMenu: FC<DynamicVariableProps> = (props) => {
    return(
        <div className="variables-formatting">
            <div className="equations-formatting">
                <MathComponent
                    tex={String.raw`q = \sum\limits_{n=0}^s e^{\frac{-E_i}{kT}}`}
                />
                <MathComponent 
                    tex={String.raw`P_${props.energyLevel} = \frac{e^{\frac{-E_${props.energyLevel}}{kT}}}{q}`}
                />
            </div>
        </div>
    );
}

export default VariablesMenu;
