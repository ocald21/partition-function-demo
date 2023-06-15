import React, { useState } from "react";
import "../css/App.css";
import DistributionGraph from "./components/DistributionGraph.tsx";
import VariablesMenu from "./components/VariablesMenu.tsx";
import CartesianPlane from "./components/CartesianPlane.tsx";

const App = () => {
  const [temperature, updateTemperature] = useState(0)
  const [energyLevel, updateEnergyLevel] = useState(0)
  const [highestLevel, updateHighestLevel] = useState(2)

  return (
    <div className="app-formatting">
      <DistributionGraph />
      <VariablesMenu 
        temperature={temperature} energyLevel={energyLevel} highestLevel={highestLevel}
        updateTemperature={updateTemperature}  updateEnergyLevel={updateEnergyLevel} updateHighestLevel={updateHighestLevel}
      />
      <CartesianPlane />
    </div>
  );
}

export default App;
