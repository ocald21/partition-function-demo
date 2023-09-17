import { MathComponent } from "mathjax-react";
import { useState } from "react";
import AppConstants from "./AppConstants.tsx";
import BarGraphComponent from "./ui/components/BarGraphComponent.tsx";
import LineGraphComponent from "./ui/components/LineGraphComponent.tsx";
import VariablesMenu from "./ui/components/VariablesMenu.tsx";
import styles from "./css/App.module.css";

const App = () => {
  const [temperature, updateTemperature] = useState(AppConstants.LOWEST_TEMPERATURE);
  const [energyLevel, updateEnergyLevel] = useState(AppConstants.LOWEST_ENERGY_LEVEL);
  const [energyLevelCount, updateEnergyLevelCount] = useState(AppConstants.LOWEST_ENERGY_LEVEL_COUNT);
  const [degeneracy, updateDegeneracy] = useState(AppConstants.DEGENERACY_MAP);

  const variables = {
    temperature,
    energyLevel,
    energyLevelCount,
    degeneracy,
    updateTemperature,
    updateEnergyLevel,
    updateEnergyLevelCount,
    updateDegeneracy,
  };

  return (
    <div className={styles.app}>
      <div className={styles.graphsDiv}>
        <BarGraphComponent
          { ...variables }
          style={styles.graph}

          verticalAxisLabel={<MathComponent tex="P_i"/>}
          horizontalAxisLabel={<>n</>} 
          verticalAxisStep={0.2}
          maxY={1} minY={0}
        />

        <LineGraphComponent
          { ...variables }
          style={styles.graph}

          verticalAxisLabel={<MathComponent tex={`P_${energyLevel}`}/>}
          horizontalAxisLabel={<>T</>} 
          verticalAxisStep={0.2} 
          horizontalAxisStep={AppConstants.HIGHEST_TEMPERATURE / 10} 
          maxY={1} minY={0} 
          maxX={AppConstants.HIGHEST_TEMPERATURE} minX={AppConstants.LOWEST_TEMPERATURE}
        />
      </div>
      
      <VariablesMenu 
        style={styles.variablesMenu} 
        { ...variables }
      />
    </div>
  );
}

export default App;
