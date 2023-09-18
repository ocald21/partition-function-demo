import { FC } from "react";
import DynamicComponentProps from "../../props/DynamicComponentProps";
import styles from "../../../css/children/BarCanvasComponent.module.css"
import { SimulationContainer } from "../../../SimulationFunctions";

interface BarCanvasComponentProps extends DynamicComponentProps {
    horizontalRange: string[]
}

export const BarCanvasComponent: FC<BarCanvasComponentProps> = ({
    energyLevel,
    energyLevelCount,
    temperature,
    degeneracy,
    updateEnergyLevel,
    horizontalRange
}) => {
    return (
        <div className={styles.container}>{
            horizontalRange.map((value) => (
                <div 
                    key={value}
                    className={styles.barDiv}
                    style={{
                        marginLeft: `calc(100% / 4 / ${energyLevelCount})`,
                        marginRight: `calc(100% / 4 / ${energyLevelCount})`,
                    }}
                >
                    <div 
                        className={styles.shadedBarDiv}
                        style={
                            {
                                backgroundColor: parseInt(value) == energyLevel ? "cyan" : "#4903fc",
                                height: `${SimulationContainer.calculateProbability(temperature, parseInt(value), energyLevelCount, degeneracy.get(energyLevel)!)*100}%`,
                            }
                        }
                        onClick={() => { updateEnergyLevel(parseInt(value)) }}
                    >
                        {value}
                    </div>
                </div>
            ))
        }</div>
    );
}
