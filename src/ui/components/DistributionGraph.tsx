import { FC } from "react";
import VariableProps from "../props/VariableProps";
import styles from "../../css/components/DistributionGraph.module.css"
import BarGraphComponent from "./children/BarGraphComponent";
import { MathComponent } from "mathjax-react";

const DistributionGraph: FC<VariableProps> = (props) => {
    return (
        <div className={styles.graphFormatting}>
            <BarGraphComponent
                energyLevel={props.energyLevel} temperature={props.temperature} levelCount={props.levelCount}
                verticalAxisLabel={<MathComponent tex="P_i" />}
                horizontalAxisLabel={<>n</>} 
                verticalAxisStep={0.2}
                maxY={1} minY={0}
            />
        </div>
    );
}

export default DistributionGraph;
