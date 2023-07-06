
const HIGHEST_ENERGY_LEVEL = 5;
const HIGHEST_TEMPERATURE = 100;
const LOWEST_ENERGY_LEVEL = 0;
const LOWEST_TEMPERATURE = 0;
const LOWEST_LEVEL_COUNT = 2;

const EnergyMap = new Map<number, number>([
    [0, 0],
    [1, 10],
    [2, 20],
    [3, 30],
    [4, 40],
]);

function calculateProbability(
    temperature: number,
    energyLevel: number,
    levelCount: number,
) {
    if (temperature <= 0.0) {
        return 0.0
    }

    const energy = EnergyMap.get(energyLevel)!;
    var denominator = 0;

    for (let i = 0; i < levelCount; i++) {
        denominator += Math.exp(-EnergyMap.get(i)! / temperature);
    }

    const numerator = Math.exp(-energy / temperature);

    return numerator / denominator;
}

function getCoordinatePairs(
    energyLevel: number,
    levelCount: number,
): Map<number, number> {
    var coordinates: Map<number, number> = new Map();

    for (let i = LOWEST_TEMPERATURE; i <= HIGHEST_TEMPERATURE; i++) {
        coordinates.set(i, calculateProbability(i, energyLevel, levelCount));
    }

    return coordinates;
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
