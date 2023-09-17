import { DegeneracyMap } from "../../types/types"

export default interface VariableProps {
    temperature: number
    energyLevel: number
    energyLevelCount: number
    degeneracy: DegeneracyMap
}