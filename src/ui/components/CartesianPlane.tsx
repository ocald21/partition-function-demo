import { FC } from "react";
import VariableProps from "../props/VariableProps";
import GraphComponent from "./children/GraphComponent";
import { MathComponent } from "mathjax-react";
import styles from "../../css/components/CartesianPlane.module.css";

const CartesianPlane: FC<VariableProps> = (props) => {
    return(
        <div className={styles.planeFormatting}>
            <GraphComponent
                verticalAxisLabel={<MathComponent tex="P_i" />}
                horizontalAxisLabel={<>T</>} 
                verticalAxisStep={0.2} horizontalAxisStep={10} 
                maxY={1} minY={0} maxX={100} minX={0}
                energyLevel={props.energyLevel}
                levelCount={props.levelCount}
                temperature={props.temperature}
            />
        </div>
    );
}

export default CartesianPlane;
