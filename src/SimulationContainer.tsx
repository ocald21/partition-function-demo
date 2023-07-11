
const HIGHEST_ENERGY_LEVEL = 5;
const HIGHEST_TEMPERATURE = 100;
const LOWEST_ENERGY_LEVEL = 0;
const LOWEST_TEMPERATURE = 0;
const LOWEST_LEVEL_COUNT = 2;
const ENERGY_MULTIPLIER = 6;

function calculateProbability(
    temperature: number,
    energyLevel: number,
    levelCount: number,
) {
    var denominator = 0;

    for (let i = 0; i < levelCount; i++) {
        denominator += Math.exp(-(ENERGY_MULTIPLIER * i) / temperature);
    }

    const numerator = Math.exp(-(ENERGY_MULTIPLIER * energyLevel) / temperature);
    const probability = numerator / denominator;

    if (Number.isNaN(probability)) {
        if (energyLevel == 0) {
            return 1.0;
        } else {
            return 0.0;
        }
    }

    return probability;
}

function getCoordinatePairs(
    energyLevel: number,
    levelCount: number,
): Map<number, number> {
    const coordinates: Map<number, number> = new Map();

    for (let i = LOWEST_TEMPERATURE; i <= HIGHEST_TEMPERATURE; i++) {
        coordinates.set(i, calculateProbability(i, energyLevel, levelCount));
    }

    return coordinates;
}

function getProbabilityPairs(
    temperature: number,
    levelCount: number,
): Map<number, number> {
    const probabilities: Map<number, number> = new Map();
    
    for (let i = LOWEST_ENERGY_LEVEL; i < levelCount; i++) {
        probabilities.set(i, calculateProbability(temperature, i, levelCount));
    }

    return probabilities;
}

const SimulationContainer = {
    HIGHEST_ENERGY_LEVEL,
    HIGHEST_TEMPERATURE,
    LOWEST_ENERGY_LEVEL,
    LOWEST_TEMPERATURE,
    LOWEST_LEVEL_COUNT,
    calculateProbability,
    getCoordinatePairs,
    getProbabilityPairs,
};

export default SimulationContainer;
