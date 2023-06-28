import React from "react";
import VariableProps from "../props/VariableProps";
import GraphComponent from "./children/GraphComponent";
import { MathComponent } from "mathjax-react";
import styles from "../../css/components/CartesianPlane.module.css";

const CartesianPlane: React.FC<VariableProps> = (props) => {
    return(
        <div className={styles.planeFormatting}>
            <GraphComponent
                verticalAxisLabel={
                    <MathComponent tex="P_i"/>
                }
                horizontalAxisLabel={
                    <>p</>
                }
            />
        </div>
    );
}

export default CartesianPlane;
