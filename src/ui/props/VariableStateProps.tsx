import { Dispatch, SetStateAction } from "react";

interface VariableStateProps {
    updateTemperature: Dispatch<SetStateAction<number>>;
    updateEnergyLevel: Dispatch<SetStateAction<number>>;
    updateLevelCount: Dispatch<SetStateAction<number>>;
}

export default VariableStateProps;
