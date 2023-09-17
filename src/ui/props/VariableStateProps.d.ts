import { Dispatch, SetStateAction } from "react";
import { DegeneracyMap } from "../../types/types";

interface VariableStateProps {
    updateTemperature: Dispatch<SetStateAction<number>>
    updateEnergyLevel: Dispatch<SetStateAction<number>>
    updateEnergyLevelCount: Dispatch<SetStateAction<number>>
    updateDegeneracy: Dispatch<SetStateAction<DegeneracyMap>>
}

export default VariableStateProps;
