import DegNumber from "./types/DegNumber";
import { DegeneracyMap } from "./types/types";

const BUTTON_UPDATE_INTERVAL_DELAY = 500;
const BUTTON_INCREMENT_DELAY = 1;
const HIGHEST_ENERGY_LEVEL_COUNT = 5;
const HIGHEST_TEMPERATURE = 1000;
const HIGHEST_DEGENERACY = 5;
const LOWEST_ENERGY_LEVEL = 0;
const LOWEST_TEMPERATURE = 0;
const LOWEST_ENERGY_LEVEL_COUNT = 2;
const LOWEST_DEGENERACY = 1;
const BOLTZMANN_CONSTANT = 1.380649E-23;
const ENERGY_MULTIPLIER = BOLTZMANN_CONSTANT * 18;
const DEGENERACY_MAP = new Map<number, DegNumber>(
    Array.from(
        { length: HIGHEST_ENERGY_LEVEL_COUNT }, 
        (_, i) => i
    ).map((num) => [num, DegNumber.ONE])
) as DegeneracyMap;

const AppConstants = {
    BUTTON_UPDATE_INTERVAL_DELAY,
    BUTTON_INCREMENT_DELAY,
    HIGHEST_ENERGY_LEVEL_COUNT,
    HIGHEST_TEMPERATURE,
    HIGHEST_DEGENERACY,
    LOWEST_ENERGY_LEVEL,
    LOWEST_TEMPERATURE,
    LOWEST_ENERGY_LEVEL_COUNT,
    LOWEST_DEGENERACY,
    BOLTZMANN_CONSTANT,
    ENERGY_MULTIPLIER,
    DEGENERACY_MAP
} as const;

export default AppConstants;
