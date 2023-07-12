import { FC } from "react";
import styles from "../../css/components/DistributionGraph.module.css"
import BarGraphComponent from "./children/BarGraphComponent";
import { MathComponent } from "mathjax-react";
import DynamicVariableProps from "../props/DynamicVariableProps";

const DistributionGraph: FC<DynamicVariableProps> = (props) => {
    return (
        <div className={styles.graphFormatting}>
            <BarGraphComponent
                temperature={props.temperature} energyLevel={props.energyLevel} levelCount={props.levelCount}
                updateTemperature={props.updateTemperature}  updateEnergyLevel={props.updateEnergyLevel} updateLevelCount={props.updateLevelCount}
                verticalAxisLabel={<MathComponent tex="P_i" />}
                horizontalAxisLabel={<>n</>} 
                verticalAxisStep={0.2}
                maxY={1} minY={0}
            />
        </div>
    );
}

export default DistributionGraph;
