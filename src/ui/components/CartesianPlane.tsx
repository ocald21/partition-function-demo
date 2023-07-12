import { FC } from "react";
import VariableProps from "../props/VariableProps";
import GraphComponent from "./children/GraphComponent";
import { MathComponent } from "mathjax-react";
import styles from "../../css/components/CartesianPlane.module.css";
import SimulationContainer from "../../SimulationContainer";

const CartesianPlane: FC<VariableProps> = (props) => {
    return(
        <div className={styles.planeFormatting}>
            <GraphComponent
                verticalAxisLabel={<MathComponent tex={`P_${props.energyLevel}`} />}
                horizontalAxisLabel={<>T</>} 
                verticalAxisStep={0.2} horizontalAxisStep={SimulationContainer.HIGHEST_TEMPERATURE / 10} 
                maxY={1} minY={0} maxX={SimulationContainer.HIGHEST_TEMPERATURE} minX={SimulationContainer.LOWEST_TEMPERATURE}
                energyLevel={props.energyLevel}
                levelCount={props.levelCount}
                temperature={props.temperature}
            />
        </div>
    );
}

export default CartesianPlane;
