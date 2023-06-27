import React from "react";
import VariableProps from "../props/VariableProps";
import { MathComponent } from "mathjax-react";
import styles from "../../css/components/DistributionGraph.module.css"

const DistributionGraph: React.FC<VariableProps> = (props) => {
    return (
        <div className={styles.graphFormatting}>
            <div className={styles.verticalAxisContainer}>     
                <div className={styles.verticalAxisLabel}>
                    <MathComponent tex="P_i"/>
                </div>
                <div className={styles.graphContainer}></div>
            </div>  
            <div className={styles.horizontalAxisContainer}>
                <p className={styles.horizontalAxisLabel}>n</p>
            </div>
        </div>
    );
}

export default DistributionGraph;
