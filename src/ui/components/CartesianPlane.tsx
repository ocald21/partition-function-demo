import React from "react";
import VariableProps from "../props/VariableProps";
import Graph from "./children/GraphComponent";
import { MathComponent } from "mathjax-react";
import styles from "../../css/components/CartesianPlane.module.css";

const CartesianPlane: React.FC<VariableProps> = (props) => {
    return(
        <div className={styles.planeFormatting}>
            <Graph
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
