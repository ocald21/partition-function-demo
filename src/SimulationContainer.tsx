
const HIGHEST_ENERGY_LEVEL = 5;
const HIGHEST_TEMPERATURE = 1_000_000;
const LOWEST_ENERGY_LEVEL = 0;
const LOWEST_TEMPERATURE = 0;
const LOWEST_LEVEL_COUNT = 2;

const EnergyMap = {
    0: 0.0,
    1: 10e1.toExponential,
    2: 10e2.toExponential,
    3: 10e3.toExponential,
    4: 10e4.toExponential,
} as const;

function calculateProbability(
    temperature: number,
    energyLevel: number,
    levelCount: number,
): number {
    EnergyMap[0]

    return 0.0;
}

const SimulationContainer = {
    HIGHEST_ENERGY_LEVEL,
    HIGHEST_TEMPERATURE,
    LOWEST_ENERGY_LEVEL,
    LOWEST_TEMPERATURE,
    LOWEST_LEVEL_COUNT,
    calculateProbability
};

export default SimulationContainer;
