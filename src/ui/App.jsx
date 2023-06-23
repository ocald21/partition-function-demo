import React, { useState } from "react";
import "../css/App.css";
import DistributionGraph from "./components/DistributionGraph.tsx";
import VariablesMenu from "./components/VariablesMenu.tsx";
import CartesianPlane from "./components/CartesianPlane.tsx";
import SimulationContainer from "../SimulationContainer";

const App = () => {
  const [temperature, updateTemperature] = useState(SimulationContainer.LOWEST_TEMPERATURE);
  const [energyLevel, updateEnergyLevel] = useState(SimulationContainer.LOWEST_ENERGY_LEVEL);
  const [levelCount, updateLevelCount] = useState(SimulationContainer.LOWEST_LEVEL_COUNT);

  return (
    <div className="app-formatting">
      <div className="graph-section">
        <DistributionGraph />
        <CartesianPlane />
      </div>

      <VariablesMenu 
        temperature={temperature} energyLevel={energyLevel} levelCount={levelCount}
        updateTemperature={updateTemperature}  updateEnergyLevel={updateEnergyLevel} updateLevelCount={updateLevelCount}
      />
    </div>
  );
}

export default App;
