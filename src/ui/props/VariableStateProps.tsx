
interface VariableStateProps {
    updateTemperature: React.Dispatch<React.SetStateAction<number>>;
    updateEnergyLevel: React.Dispatch<React.SetStateAction<number>>;
    updateHighestLevel: React.Dispatch<React.SetStateAction<number>>;
}

export default VariableStateProps;
