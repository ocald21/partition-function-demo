import { Dispatch, SetStateAction } from "react";

interface VariableStateProps {
    updateTemperature: Dispatch<SetStateAction<number>>
    updateMicrostate: Dispatch<SetStateAction<number>>
    updateMicrostateCount: Dispatch<SetStateAction<number>>
    updateDegeneracy: Dispatch<SetStateAction<number>>
}

export default VariableStateProps;
