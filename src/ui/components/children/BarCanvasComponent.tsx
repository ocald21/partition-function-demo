import { FC } from "react";
import DynamicComponentProps from "../../props/DynamicComponentProps";
import styles from "../../../css/children/BarCanvasComponent.module.css"
import SimulationFunctions from "../../../SimulationFunctions";

interface BarCanvasComponentProps extends DynamicComponentProps {
    horizontalRange: string[]
}

const BarCanvasComponent: FC<BarCanvasComponentProps> = (props) => {
    return (
        <div className={styles.container}>{
            props.horizontalRange.map((value) => (
                <div 
                    key={value}
                    className={styles.barDiv}
                    style={{
                        marginLeft: `calc(100% / 4 / ${props.energyLevelCount})`,
                        marginRight: `calc(100% / 4 / ${props.energyLevelCount})`,
                    }}
                >
                    <div 
                        className={styles.shadedBarDiv}
                        style={
                            {
                                backgroundColor: parseInt(value) == props.energyLevel ? "cyan" : "#4903fc",
                                height: `${SimulationFunctions.calculateProbability(props.temperature, parseInt(value), props.energyLevelCount, props.degeneracy)*100}%`,
                            }
                        }
                        onClick={() => { props.updateEnergyLevel(parseInt(value)) }}
                    >
                        {value}
                    </div>
                </div>
            ))
        }</div>
    );
}

export default BarCanvasComponent;
